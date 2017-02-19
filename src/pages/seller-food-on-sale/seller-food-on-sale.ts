import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding, Item } from 'ionic-angular';

/*
  Generated class for the FoodOnSale page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-food-on-sale',
  templateUrl: 'seller-food-on-sale.html',

})
export class FoodOnSalePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodOnSalePage');
  }

  // logDrag(item){
  //   // let percent = 1;
  //    let percent = item.getSlidingPercent();
    
  // if (percent > 0) {
  //   // positive
  //   console.log('right side');
  // } else {
  //   // negative
  //   console.log('left side');
  // }
  // if (Math.abs(percent) > 1) {
  //   console.log('overscroll');
  // }
  // }

   result = document.getElementsByClassName("multi-files");


//    open(itemSlide, item: Item) {
//     // reproduce the slide on the click
//     itemSlide.setElementClass("active-sliding", true);
//     itemSlide.setElementClass("active-slide", true);
//     itemSlide.setElementClass("active-options-right", true);
//     item.setElementStyle("transform", "translate3d(-80px, 0px, 0px)");
// }

//    open() {
//     // reproduce the slide on the click
//     this.result.setCollectionClass("active-sliding", true);
//     this.result.setElementClass("active-slide", true);
//     this.result.setElementClass("active-options-right", true);
//     // item.setElementStyle("transform", "translate3d(-80px, 0px, 0px)");
// }


public close(item: ItemSliding) {
    item.close();
    item.setElementClass("active-sliding", false);
    item.setElementClass("active-slide", false);
    item.setElementClass("active-options-right", false);
}

}
