import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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
    public personService: PersonService,
    public loadingCtrl: LoadingController
  ){}

  ionViewWillEnter(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();

    this.personService.getEnablePeople()
    .then(res => {
      this.people = res.json();
      loading.dismiss()
    });
  }

  assign(personId){
    this.navCtrl.push(AssignPetPage,{id: personId});
  }

  consultPets(personId){
    this.navCtrl.push(MyPetsPage, {id: personId});
  }
}
