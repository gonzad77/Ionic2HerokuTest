import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Component({
  selector: 'page-deletePerson',
  templateUrl: 'deletePerson.html'
})

export class DeletePersonPage {

  people: any;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  getPeople(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/People', options)
    .toPromise()
    .then(res => this.people = res.json())
  }

  ionViewWillLoad() {
    this.getPeople();
  }

  delete(personId){
    this.updatePets(personId);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .delete('http://localhost:3000/api/People/' + personId, options)
    .toPromise()
    .then(res => this.getPeople())
  }

  updatePets(personId){
    let id = "" + personId + "";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/Pets?filter={"where":{"ownerId":"' + id + '"}}',options)
    .toPromise()
    .then(res => this.updatePet(res.json()))
  }

  updatePet(pets){
    if(pets.length > 0)
      for(let i = 0; i < pets.length; i++){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
        .put('http://localhost:3000/api/Pets/' + pets[i].id ,
        {
          ownerId: null
        },options)
        .toPromise()
        .then(res => this.updatePet(res.json()))
      }
    }
}
