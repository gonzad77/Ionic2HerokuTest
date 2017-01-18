import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'page-deletePerson',
  templateUrl: 'deletePerson.html'
})

export class DeletePersonPage {

  constructor(public navCtrl: NavController, public http: Http) {

  }
}
