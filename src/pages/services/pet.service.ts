import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Injectable()
export class PetService {

  constructor(public http: Http) {

  }

  getPets(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/Pets', options)
    .toPromise()
  }

  getPet(petId){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/Pets/' + petId, options)
    .toPromise()
  }

  deletePet(petId){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .delete('http://localhost:3000/api/Pets/' + petId, options)
    .toPromise()
  }

  updatePet(petId, values){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .put('http://localhost:3000/api/Pets/' + petId, {
      name: values.name,
      animal: values.animal
      }, options)
    .toPromise()
  }

  updatePets(personId){
    let id = "" + personId + "";
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .post('http://localhost:3000/api/Pets/update?where[ownerId]=' + id,
    {
      ownerId: null
    },options)
    .toPromise()
  }

  // updateEachPet(pets){
  //   if(pets.length > 0){
  //     for(let i = 0; i < pets.length; i++){
  //       let headers = new Headers({ 'Content-Type': 'application/json' });
  //       let options = new RequestOptions({ headers: headers });
  //       return this.http
  //       .put('http://localhost:3000/api/Pets/' + pets[i].id ,
  //       {
  //         ownerId: null
  //       },options)
  //       .toPromise()
  //     }
  //   }
  // }

  getNotAssignedPets(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/Pets?filter={"where": {"or":[{"ownerId":{"exists": false}},{"ownerId":null}]}}', options)
    .toPromise()
  }

  assignPet(petId, personId){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .put('http://localhost:3000/api/Pets/' + petId,{
      ownerId: personId
    } ,options)
    .toPromise()
  }

  createPet(values){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .post('http://localhost:3000/api/Pets', {
      name: values.name,
      animal: values.animal
      }, options)
    .toPromise()
  }
}
