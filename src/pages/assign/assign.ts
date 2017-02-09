import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssignPetPage } from '../assignPet/assignPet';
import { MyPetsPage } from '../myPets/myPets'
import { PersonService } from "../services/person.service";



@Component({
  selector: 'page-assign',
  templateUrl: 'assign.html'
})

export class AssignPage {
  people: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public personService: PersonService
  ){}

  ionViewDidEnter(){
    this.personService.getEnablePeople()
    .then(res => this.people = res.json())
  }

  assign(personId){
    this.navCtrl.push(AssignPetPage,{id: personId});
  }

  consultPets(personId){
    this.navCtrl.push(MyPetsPage, {id: personId});
  }
}
