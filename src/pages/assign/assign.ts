import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';
import { AssignPetPage } from '../assignPet/assignPet';


@Component({
  selector: 'page-assign',
  templateUrl: 'assign.html'
})

export class AssignPage {
  people: any;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewWillLoad() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/People?filter={"where":{"enabled":true}}', options)
    .toPromise()
    .then(res => this.people = res.json())
  }

  assign(personId){
    this.navCtrl.push(AssignPetPage,{id: personId});
  }
}
