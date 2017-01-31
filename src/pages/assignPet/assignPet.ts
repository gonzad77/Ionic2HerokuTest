import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { PetService } from "../services/pet.service";

@Component({
  selector: 'page-assignPet',
  templateUrl: 'assignPet.html'
})

export class AssignPetPage {

  pets: any;

  constructor(public navParams: NavParams, public petService: PetService) {

  }

  ionViewWillLoad() {
    this.petService.getNotAssignedPets()
    .then(res => this.pets = res.json())
  }

  assign(petId){
    let personId = this.navParams.get('id');
    this.petService.assignPet(petId, personId)
    .then(res => console.log(res))
  }
}
