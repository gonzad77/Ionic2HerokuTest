import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { EditPersonPage } from '../editPerson/editPerson';
import { PersonPage } from '../createPerson/createPerson';
import { PersonService } from "../services/person.service";
import { PetService } from "../services/pet.service";




@Component({
  selector: 'page-people',
  templateUrl: 'people.html'
})

export class PeoplePage {
  people: Array<any> = [];

  constructor(
    public navCtrl: NavController,
    public personService: PersonService,
    public petService: PetService,
    public loadingCtrl: LoadingController
  ){}

  create(){
    this.navCtrl.push(PersonPage);
  }

  getPeople(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.personService.getPeople()
    .then(res => {this.people = res.json();
                  loading.dismiss()})
  }

  ionViewWillEnter() {
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
    })
  }
}
