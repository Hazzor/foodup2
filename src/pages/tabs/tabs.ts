import { Component } from '@angular/core';

import { FoodShopPage } from '../food-shop/food-shop';
import { BasketPage } from '../basket/basket';
import { OrderedPage } from '../ordered/ordered';
import { AccountPage } from '../account/account';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FoodShopPage;
  tab2Root: any = BasketPage;
  tab3Root: any = OrderedPage;
  tab4Root: any = AccountPage;

  constructor() {

  }
}
