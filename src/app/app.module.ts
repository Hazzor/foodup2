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
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutPage } from '../pages/about/about';

//Seller Pages
import { FoodOnSalePage } from '../pages/seller-food-on-sale/seller-food-on-sale';
import { SellFoodPage } from '../pages/seller-sell-food/seller-sell-food';
import { SellerStatisticPage } from '../pages/seller-statistic/seller-statistic';
import { SellerNamelistPage } from '../pages/seller-namelist/seller-namelist';

import { SellerInfosPage } from '../pages/seller-infos/seller-infos';
import { ViewSellerInfoPage } from '../pages/view-seller-info/view-seller-info';
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
    ContactUsPage,
    AboutPage,

    UpdateProfilePage,
    FoodOnSalePage,
    SellFoodPage,
    SellerStatisticPage,
    SellerNamelistPage,
    SellerInfosPage,
    ViewSellerInfoPage,
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
    ContactUsPage,
    AboutPage,

    FoodOnSalePage,
    SellFoodPage,
    SellerStatisticPage,
    SellerNamelistPage,
    SellerInfosPage,
    ViewSellerInfoPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
