import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})

export class PersonPage {

  constructor(public navCtrl: NavController, public http: Http) {

  }
}
