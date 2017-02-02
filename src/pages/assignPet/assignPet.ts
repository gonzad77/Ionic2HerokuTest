import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { PetService } from "../services/pet.service";
import { AssignPage } from '../assign/assign';

@Component({
  selector: 'page-assignPet',
  templateUrl: 'assignPet.html'
})

export class AssignPetPage {

  pets: Array<any> = [];

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    public petService: PetService,
    public toastCtrl: ToastController
  ){}

  ionViewWillLoad() {
    this.petService.getNotAssignedPets()
    .then(res => this.pets = res.json())
  }

  back(){
    this.navCtrl.push(AssignPage);
  }

  assign(petId){
    let toast = this.toastCtrl.create({
                  message: 'Pet was assigned',
                  duration: 3000
                });
    let personId = this.navParams.get('id');
    this.petService.assignPet(petId, personId)
    .then(res => {  toast.present();
                    this.navCtrl.push(AssignPage);
                 })
  }


}
