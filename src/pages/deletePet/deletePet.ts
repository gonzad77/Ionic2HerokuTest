import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PetService } from "../services/pet.service";


@Component({
  selector: 'page-deletePet',
  templateUrl: 'deletePet.html'
})

export class DeletePetPage {

  pets: any;

  constructor(public navCtrl: NavController, public petService: PetService) {

  }

  getPets(){
    this.petService.getPets()
    .then(res => this.pets = res.json())
  }

  ionViewWillLoad() {
    this.getPets();
  }

  delete(petId){
    this.petService.deletePet(petId)
    .then(res => this.getPets())
  }

}
