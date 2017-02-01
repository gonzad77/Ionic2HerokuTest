import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PetService } from "../services/pet.service";
import { EditPetPage } from '../editPet/editPet';
import { PetPage } from '../pet/pet';



@Component({
  selector: 'page-animals',
  templateUrl: 'animals.html'
})

export class AnimalsPage {
  pets: any;

  constructor(public navCtrl: NavController, public petService: PetService) {

  }

  create(){
    this.navCtrl.push(PetPage);
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

  update(pet){
    this.navCtrl.push(EditPetPage,{pet: pet})
  }
}
