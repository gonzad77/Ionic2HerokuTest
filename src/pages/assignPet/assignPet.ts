import { Component } from '@angular/core';
import { NavParams, NavController, ToastController, LoadingController } from 'ionic-angular';
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
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ){}

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.petService.getNotAssignedPets()
    .then(res => {this.pets = res.json();
                  loading.dismiss()})
  }

  back(){
    this.navCtrl.push(AssignPage);
  }

  assign(petId){
    let toast = this.toastCtrl.create({
                  message: 'Congratulations! You adopted a Pet',
                  duration: 2000,
                  position: 'top'
                });
    let personId = this.navParams.get('id');
    this.petService.assignPet(petId, personId)
    .then(res => {  toast.present();
                    this.navCtrl.push(AssignPage);
                 })
  }


}
