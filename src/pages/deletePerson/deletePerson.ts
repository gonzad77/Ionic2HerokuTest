import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonService } from "../services/person.service";
import { PetService } from "../services/pet.service";

@Component({
  selector: 'page-deletePerson',
  templateUrl: 'deletePerson.html'
})

export class DeletePersonPage {

  people: any;

  constructor(
    public navCtrl: NavController,
    public personService: PersonService,
    public petService: PetService) {

  }

  getPeople(){
    this.personService.getPeople()
    .then(res => this.people = res.json())
  }

  ionViewWillLoad() {
    this.getPeople();
  }

  delete(personId){
    this.updatePets(personId);
    this.personService.delete(personId)
    .then(res => this.getPeople())
  }

  updatePets(personId){
    this.petService.updatePets(personId)
    .then(res => this.updateEachPet(res.json()))
  }

  updateEachPet(pets){
    this.petService.updateEachPet(pets)
    .then(res => console.log("Pets Updated"))
  }
}
