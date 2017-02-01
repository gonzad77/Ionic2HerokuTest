import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { PetService } from "../services/pet.service";
import { AnimalsPage } from "../animals/animals";


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

  constructor(
    public navParm: NavParams,
    public navCtrl: NavController,
    public petService: PetService,
    public toastCtrl: ToastController) {

  }

  // getPet(petId){
  //   this.petService.getPet(petId)
  //   .then(res => this.pet = res.json())
  // }

  ionViewWillLoad() {
    this.pet = this.navParm.get("pet");
    this.petForm = new FormGroup({
      name: new FormControl(this.pet.name, Validators.required),
      animal: new FormControl(this.pet.animal, Validators.required)
    });

    // this.getPet(pet.id);
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
                  message: 'Pet was edited',
                  duration: 3000
                });
    let petId = this.pet.id;
    this.petService.updatePet(petId, values)
    .then(res => {toast.present();
                  this.navCtrl.push(AnimalsPage);
                })
  }
}
