import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})

export class PersonPage {

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

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewWillLoad() {
    this.personForm = new FormGroup({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      able: new FormControl(false, Validators.required)
    });
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
    .post('http://localhost:3000/api/People', {
      name: values.name,
      surname: values.lastname,
      age: values.age ,
      enabled: values.able
      }, options)
    .toPromise()
    .then(res => console.log(res))
  }

}
