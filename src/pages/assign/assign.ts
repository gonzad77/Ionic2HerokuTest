import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AssignPetPage } from '../assignPet/assignPet';
import { PersonService } from "../services/person.service";



@Component({
  selector: 'page-assign',
  templateUrl: 'assign.html'
})

export class AssignPage {
  people: any;

  constructor(public navCtrl: NavController, public personService: PersonService) {

  }

  ionViewDidEnter(){
    this.personService.getEnablePeople()
    .then(res => this.people = res.json())
  }

  assign(personId){
    this.navCtrl.push(AssignPetPage,{id: personId});
  }
}
