import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { EditPetPage } from '../editPet/editPet';
import { PetService } from "../services/pet.service";


@Component({
  selector: 'page-updatePet',
  templateUrl: 'updatePet.html'
})

export class UpdatePetPage {

  pets: any;

  constructor(public navCtrl: NavController, public petService: PetService) {

  }

  ionViewWillLoad() {
    this.petService.getPets()
    .then(res => this.pets = res.json())
  }

  update(pet){
    this.navCtrl.push(EditPetPage,{pet: pet});
  }
}
