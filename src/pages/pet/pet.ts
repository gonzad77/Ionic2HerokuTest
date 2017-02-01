import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { PetService } from "../services/pet.service";
import { AnimalsPage } from "../animals/animals"

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

  constructor(
    public navCtrl: NavController,
    public petService: PetService,
    public toastCtrl: ToastController
  ){}

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

  cancel(){
    this.navCtrl.push(AnimalsPage);
  }

  onSubmit(values){
    let toast = this.toastCtrl.create({
                  message: 'Pet was created',
                  duration: 3000
                });
    this.petService.createPet(values)
    .then(res => {toast.present();
                  this.navCtrl.push(AnimalsPage);
                })
  }

}
