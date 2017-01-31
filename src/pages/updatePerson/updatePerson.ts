import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditPersonPage } from '../editPerson/editPerson';
import { PersonService } from "../services/person.service";


@Component({
  selector: 'page-updatePerson',
  templateUrl: 'updatePerson.html'
})

export class UpdatePersonPage {

  people: any;

  constructor(public navCtrl: NavController, public personService: PersonService) {

  }

  ionViewWillLoad() {
    this.personService.getPeople()
    .then(res => this.people = res.json())
  }

  update(person){
    this.navCtrl.push(EditPersonPage,{person: person});
  }
}
