import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { PetService } from "../services/pet.service";
import { EditPetPage } from '../editPet/editPet';
import { PetPage } from '../createPet/createPet';



@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html'
})

export class AnimalsPage {
  pets: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public petService: PetService,
    public loadingCtrl: LoadingController
  ){}

  create(){
    this.navCtrl.push(PetPage);
  }

  getPets(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.petService.getPets()
    .then(res => {this.pets = res.json();
                  loading.dismiss()})
  }

  ionViewWillEnter() {
    this.getPets();
  }

  delete(petId){
    this.petService.deletePet(petId)
    .then(res => this.getPets())
  }

  update(pet){
    this.navCtrl.push(EditPetPage,{pet: pet})
  }
}
