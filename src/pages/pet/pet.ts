import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'page-pet',
  templateUrl: 'pet.html'
})

export class PetPage {

  petForm: FormGroup;
  formErrors = {
    'name': [],
    'animal': []
  };
  validationMessages = {
    'name': {
      'required':      'Name is required.'
    },
    'animal': {
      'required':      'Animal is required'
    }
  };

  constructor(public navCtrl: NavController, public http: Http) {

  }

  ionViewWillLoad() {
    this.petForm = new FormGroup({
      name: new FormControl('', Validators.required),
      animal: new FormControl('', Validators.required)
    });
  }

  onValueChanged(data?: any) {
  if (!this.petForm) { return; }
    const form = this.petForm;
    for (const field in this.formErrors) {
      // clear previous error message
      this.formErrors[field] = [];
      this.petForm[field] = '';
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
    .post('http://localhost:3000/api/Pets', {
      name: values.name,
      animal: values.animal
      }, options)
    .toPromise()
    .then(res => console.log(res))
  }

}
