import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PersonPage } from '../person/person';
import { PetPage } from '../pet/pet';
import { AssignPage } from '../assign/assign';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  // addPerson(): Promise<any>{
  //   // let headers = new Headers({ 'Content-Type': 'application/json' });
  //   // let options = new RequestOptions({ headers: headers });
  //   // return this.http
  //   // .post('http://localhost:3000/api/People', {name: "Mauricio", age: 23 ,id: "3"}, options)
  //   // .toPromise()
  //   // .then(res => console.log(res))
  //   // .catch(console.log("error"));
  // }

  addPerson(){
    this.navCtrl.push(PersonPage);
  }

  addPet(){
    this.navCtrl.push(PetPage);
  }

  Assign(){
    this.navCtrl.push(AssignPage)
  }
}
