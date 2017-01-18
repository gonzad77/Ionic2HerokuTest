import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonPage } from '../person/person';
import { PetPage } from '../pet/pet';
import { AssignPage } from '../assign/assign';
import { DeletePetPage } from '../deletePet/deletePet';
import { DeletePersonPage } from '../deletePerson/deletePerson';
import { UpdatePetPage } from '../updatePet/updatePet';
import { UpdatePersonPage } from '../updatePerson/updatePerson';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addPerson(){
    this.navCtrl.push(PersonPage);
  }

  addPet(){
    this.navCtrl.push(PetPage);
  }

  assign(){
    this.navCtrl.push(AssignPage);
  }

  deletePerson(){
    this.navCtrl.push(DeletePersonPage);
  }

  deletePet(){
    this.navCtrl.push(DeletePetPage);
  }

  updatePerson(){
    this.navCtrl.push(UpdatePersonPage);
  }

  updatePet(){
    this.navCtrl.push(UpdatePetPage);
  }
}
