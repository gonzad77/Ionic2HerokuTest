import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';
import { EditPersonPage } from '../editPerson/editPerson';

@Component({
  selector: 'page-updatePerson',
  templateUrl: 'updatePerson.html'
})

export class UpdatePersonPage {

  people: any;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewWillLoad() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/People', options)
    .toPromise()
    .then(res => this.people = res.json())
  }

  update(personId){
    this.navCtrl.push(EditPersonPage,{id: personId});
  }
}
