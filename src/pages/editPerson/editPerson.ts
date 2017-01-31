import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { PersonService } from "../services/person.service";


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

  constructor(public navParm: NavParams, public personService: PersonService) {

  }

  // getPerson(personId){
  //   this.personService.getPerson(personId)
  //   .then(res => this.person = res.json())
  // }

  ionViewWillLoad() {
    this.person = this.navParm.get("person");
    this.personForm = new FormGroup({
      name: new FormControl(this.person.name, Validators.required),
      lastname: new FormControl(this.person.surname, Validators.required),
      age: new FormControl(this.person.age, Validators.required),
      able: new FormControl(this.person.enabled, Validators.required)
    });

    // this.person = this.getPerson(personId);
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

  onSubmit(values){
    let personId = this.person.id;
    this.personService.updatePerson(personId, values)
    .then(res => console.log(res))
  }
}
