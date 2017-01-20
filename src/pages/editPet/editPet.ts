import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { Headers, RequestOptions, Http } from '@angular/http';
import { Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'page-editPet',
  templateUrl: 'editPet.html'
})

export class EditPetPage {

  pet: any;
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

  constructor(public navParm: NavParams, public http: Http) {

  }

  getPet(petId): Promise<any>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
    .get('http://localhost:3000/api/Pets/' + petId, options)
    .toPromise()
    .then(res => this.pet = res.json())
  }

  ionViewWillLoad() {
    this.petForm = new FormGroup({
      name: new FormControl('', Validators.required),
      animal: new FormControl('', Validators.required)
    });
    let petId = this.navParm.get("id");
    this.getPet(petId);
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
    .put('http://localhost:3000/api/Pets/' + this.pet.id, {
      name: values.name,
      animal: values.animal
      }, options)
    .toPromise()
    .then(res => console.log(res))
  }
}
