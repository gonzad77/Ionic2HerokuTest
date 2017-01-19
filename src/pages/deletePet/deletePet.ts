import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'page-deletePet',
  templateUrl: 'deletePet.html'
})

export class DeletePetPage {

  pets: any;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  getPets(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/Pets', options)
    .toPromise()
    .then(res => this.pets = res.json())
  }

  ionViewWillLoad() {
    this.getPets();
  }

  delete(petId){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .delete('http://localhost:3000/api/Pets/' + petId, options)
    .toPromise()
    .then(res => this.getPets())
  }

}
