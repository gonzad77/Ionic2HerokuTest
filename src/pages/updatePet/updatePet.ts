import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'page-updatePet',
  templateUrl: 'updatePet.html'
})

export class UpdatePetPage {

  pets: any;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewWillLoad() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/Pets', options)
    .toPromise()
    .then(res => this.pets = res.json())
  }

  update(petId){
    console.log(petId);
  }
}
