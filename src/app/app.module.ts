import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BasketPage } from '../pages/basket/basket';
import { AccountPage } from '../pages/account/account';
import { FoodPage } from '../pages/food/food';
import { OrderedPage } from '../pages/ordered/ordered';
import { FoodOrderPage } from '../pages/food-order/food-order';
import { FoodShopPage } from '../pages/food-shop/food-shop';
import { LocationPage } from '../pages/location/location';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    BasketPage,
    AccountPage,
    FoodPage,
    OrderedPage,
    FoodOrderPage,
    FoodShopPage,
    LocationPage,
    LoginPage,
    SignupPage,
    UpdateProfilePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BasketPage,
    AccountPage,
    FoodPage,
    OrderedPage,
    FoodOrderPage,
    FoodShopPage,
    LocationPage,
    LoginPage,
    SignupPage,
    UpdateProfilePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
