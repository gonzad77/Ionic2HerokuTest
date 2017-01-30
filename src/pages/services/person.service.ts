import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';

@Injectable()
export class PersonService {

  constructor(public http: Http) {

  }

  
}
