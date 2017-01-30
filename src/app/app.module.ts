import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AssignPage } from '../pages/assign/assign';
import { PetPage } from '../pages/pet/pet';
import { PersonPage } from '../pages/person/person';
import { DeletePersonPage } from '../pages/deletePerson/deletePerson';
import { DeletePetPage } from '../pages/deletePet/deletePet';
import { UpdatePetPage } from '../pages/updatePet/updatePet';
import { UpdatePersonPage } from '../pages/updatePerson/updatePerson';
import { EditPetPage } from '../pages/editPet/editPet';
import { EditPersonPage } from '../pages/editPerson/editPerson';
import { AssignPetPage } from '../pages/assignPet/assignPet';
import { PersonService } from '../pages/services/person.service';
import { PetService } from '../pages/services/pet.service';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonPage,
    PetPage,
    AssignPage,
    DeletePetPage,
    DeletePersonPage,
    UpdatePetPage,
    UpdatePersonPage,
    EditPetPage,
    EditPersonPage,
    AssignPetPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonPage,
    PetPage,
    AssignPage,
    DeletePetPage,
    DeletePersonPage,
    UpdatePetPage,
    UpdatePersonPage,
    EditPetPage,
    EditPersonPage,
    AssignPetPage
  ],
  providers: [PetService, PersonService]
})
export class AppModule {}
