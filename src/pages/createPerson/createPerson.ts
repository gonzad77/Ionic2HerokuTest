import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { PersonService } from "../services/person.service";
import { PeoplePage } from '../people/people';



@Component({
  selector: 'page-create-person',
  templateUrl: 'createPerson.html'
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

  constructor(
    public navCtrl: NavController,
    public personService: PersonService,
    public toastCtrl: ToastController
  ){}

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

  cancel(){
    this.navCtrl.push(PeoplePage);
  }

  onSubmit(values){
    let toast = this.toastCtrl.create({
                  message: 'Person was created',
                  duration: 2000,
                  position: 'top'
                });
    this.personService.createPerson(values)
    .then(res => {toast.present();
                 this.navCtrl.push(PeoplePage);
                })
  }

}
