import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'page-updatePet',
  templateUrl: 'updatePet.html'
})

export class UpdatePetPage {

  constructor(public navCtrl: NavController, public http: Http) {

  }
}
