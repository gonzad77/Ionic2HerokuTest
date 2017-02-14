import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PetService } from "../services/pet.service";
import { AssignPage } from '../assign/assign';

@Component({
  selector: 'page-my-pets',
  templateUrl: 'myPets.html'
})

export class MyPetsPage {
  pets: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public petService: PetService,
    public loadingCtrl: LoadingController
  ){}

  back(){
    this.navCtrl.push(AssignPage);
  }

  getPetsByOwner(){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    let personId = this.navParams.get('id');
    this.petService.getPetsByOwner(personId)
    .then(res => {this.pets = res.json();
                  loading.dismiss()})
  }

  ionViewWillEnter(){
    this.getPetsByOwner();
  }

  setFree(petId){
    this.petService.setOwnerNull(petId)
    .then(res => this.getPetsByOwner())
  }

}
