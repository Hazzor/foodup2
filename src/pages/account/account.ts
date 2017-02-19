import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { UpdateProfilePage } from '../update-profile/update-profile';
import { ContactUsPage } from '../contact-us/contact-us';
// import { ViewSellerInfoPage } from '../view-seller-info/view-seller-info';
import { SellerInfosPage } from '../seller-infos/seller-infos';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

name:any;
  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
      this.name="Hester";
  }

  profileSelected() {
    this.navCtrl.push(UpdateProfilePage);
  }

  sellerProfileSelected(){
    this.navCtrl.push(SellerInfosPage);
  }

  logoutSelected(){

    let login = this.modalCtrl.create(LoginPage);
    login.present();
  }

  contactSelected(){
    this.navCtrl.push(ContactUsPage);
  }

  aboutSelected(){
    this.navCtrl.push(AboutPage);
  }

  onEnter(value:string){
    this.name = value;
  }

}
