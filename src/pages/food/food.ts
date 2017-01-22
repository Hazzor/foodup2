import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { FoodOrderPage } from '../food-order/food-order';

@Component({
  selector: 'page-food',
  templateUrl: 'food.html'
})
export class FoodPage {
 food
  constructor(public navCtrl: NavController, private modalPage:ModalController) {
    this.food = "Lunch"
  }

  foodClicked(){
    this.navCtrl.push(FoodOrderPage);
    
  }

}
