import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'page-deletePet',
  templateUrl: 'deletePet.html'
})

export class DeletePetPage {

  constructor(public navCtrl: NavController, public http: Http) {

  }
}
