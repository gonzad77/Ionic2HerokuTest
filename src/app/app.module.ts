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
    UpdatePersonPage
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
    UpdatePersonPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
