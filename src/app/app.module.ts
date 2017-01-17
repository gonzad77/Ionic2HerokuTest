import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AssignPage } from '../pages/assign/assign';
import { PetPage } from '../pages/pet/pet';
import { PersonPage } from '../pages/person/person';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonPage,
    PetPage,
    AssignPage
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
    AssignPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
