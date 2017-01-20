import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'page-assignPet',
  templateUrl: 'assignPet.html'
})

export class AssignPetPage {

  pets: any;

  constructor(public navParams: NavParams, public http: Http) {

  }

  ionViewWillLoad() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/Pets?filter={"where":{"ownerId":""}}', options)
    .toPromise()
    .then(res => this.pets = res.json())
  }

  assign(petId){
    let personId = this.navParams.get('id');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .put('http://localhost:3000/api/Pets/' + petId,{
      ownerId: personId
    } ,options)
    .toPromise()
    .then(res => console.log(res))
  }
}
