import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Injectable()
export class PersonService {

  constructor(public http: Http) {

  }

  getPeople(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/People', options)
    .toPromise()
  }

  getPerson(personId){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/People/' + personId, options)
    .toPromise()
  }

  delete(personId){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .delete('http://localhost:3000/api/People/' + personId, options)
    .toPromise()
  }

  getEnablePeaple(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/People?filter={"where":{"enabled":true}}', options)
    .toPromise()
  }

  updatePerson(personId, values){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .put('http://localhost:3000/api/People/' + personId, {
      name: values.name,
      surname: values.lastname,
      age: values.age ,
      enabled: values.able
      }, options)
    .toPromise()
  }

  createPerson(values){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .post('http://localhost:3000/api/People', {
      name: values.name,
      surname: values.lastname,
      age: values.age ,
      enabled: values.able
      }, options)
    .toPromise()
  }
}
