import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsNavigationPage } from '../pages/tabs-navigation/tabs-navigation';
import { AssignPage } from '../pages/assign/assign';
import { PetPage } from '../pages/createPet/createPet';
import { PersonPage } from '../pages/createPerson/createPerson';
import { EditPetPage } from '../pages/editPet/editPet';
import { EditPersonPage } from '../pages/editPerson/editPerson';
import { AssignPetPage } from '../pages/assignPet/assignPet';
import { PeoplePage } from '../pages/people/people';
import { AnimalsPage } from '../pages/animals/animals';
import { MyPetsPage } from '../pages/myPets/myPets';
import { PersonService } from '../pages/services/person.service';
import { PetService } from '../pages/services/pet.service';





@NgModule({
  declarations: [
    MyApp,
    TabsNavigationPage,
    PersonPage,
    PetPage,
    AssignPage,
    EditPetPage,
    EditPersonPage,
    AssignPetPage,
    PeoplePage,
    AnimalsPage,
    MyPetsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsNavigationPage,
    PersonPage,
    PetPage,
    AssignPage,
    EditPetPage,
    EditPersonPage,
    AssignPetPage,
    PeoplePage,
    AnimalsPage,
    MyPetsPage
  ],
  providers: [PetService, PersonService]
})
export class AppModule {}
