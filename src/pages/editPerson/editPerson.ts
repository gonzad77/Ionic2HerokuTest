import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Validators, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'page-editPerson',
  templateUrl: 'editPerson.html'
})

export class EditPersonPage {

  person: any;
  personForm: FormGroup;
  formErrors = {
    'name': [],
    'lastname': [],
    'age': []
  };
  validationMessages = {
    'name': {
      'required':      'Name is required.'
    },
    'lastname': {
      'required':      'Last name is required'
    },
    'age': {
      'required':      'Age is required'
    },
  };

  constructor(public navParm: NavParams, public http: Http) {

  }

  getPerson(personId){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/People/' + personId, options)
    .toPromise()
    .then(res => this.person = res.json())
  }

  ionViewWillLoad() {
    this.personForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      able: new FormControl(false, Validators.required)
    });
    let personId = this.navParm.get("id");
    this.person = this.getPerson(personId);
  }

  onValueChanged(data?: any) {
  if (!this.personForm) { return; }
    const form = this.personForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.personForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field].push(messages[key]);
        }
      }
    }
  }

  onSubmit(values): Promise<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .put('http://localhost:3000/api/People/' + this.person.id, {
      name: values.name,
      surname: values.lastname,
      age: values.age ,
      enabled: values.able
      }, options)
    .toPromise()
    .then(res => console.log(res))
  }
}
