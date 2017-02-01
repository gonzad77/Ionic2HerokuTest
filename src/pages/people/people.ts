import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditPersonPage } from '../editPerson/editPerson';
import { PersonPage } from '../person/person';
import { PersonService } from "../services/person.service";
import { PetService } from "../services/pet.service";




@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})

export class PeoplePage {
  people: any;

  constructor(
    public navCtrl: NavController,
    public personService: PersonService,
    public petService: PetService
  ){}

  create(){
    this.navCtrl.push(PersonPage);
  }

  getPeople(){
    this.personService.getPeople()
    .then(res => this.people = res.json())
  }

  ionViewWillLoad() {
    this.getPeople();
  }

  update(person){
    this.navCtrl.push(EditPersonPage,{person: person});
  }

  delete(personId){
    this.updatePets(personId);
    this.personService.deletePerson(personId)
    .then(res => this.getPeople())
  }

  updatePets(personId){
    this.petService.updatePets(personId)
    .then(res => {console.log(res.json)
      // this.updateEachPet(res.json())
    })
  }

  // updateEachPet(pets){
  //   this.petService.updateEachPet(pets)
  //   .then(res => console.log("Pets Updated"))
  // }
}
