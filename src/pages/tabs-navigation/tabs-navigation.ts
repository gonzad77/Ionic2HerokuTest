import { Component } from '@angular/core';

import { AnimalsPage } from '../animals/animals';
import { PeoplePage } from '../people/people';
import { AssignPage } from '../assign/assign';

@Component({
  selector: 'tabs-navigation',
  templateUrl: 'tabs-navigation.html'
})
export class TabsNavigationPage {
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor() {
    this.tab1Root = PeoplePage;
    this.tab2Root = AnimalsPage;
    this.tab3Root = AssignPage;
  }
}
