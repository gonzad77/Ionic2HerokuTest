import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';
import { PetService } from "../services/pet.service";


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

  constructor(public navParm: NavParams, public petService: PetService) {

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

  onSubmit(values){
    let petId = this.pet.id;
    this.petService.updatePet(petId, values)
    .then(res => console.log(res))
  }
}
