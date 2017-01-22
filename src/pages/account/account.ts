import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { UpdateProfilePage } from '../update-profile/update-profile';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  profileSelected() {
    this.navCtrl.push(UpdateProfilePage);
  }

  logoutSelected(){

    let login = this.modalCtrl.create(LoginPage);
    login.present();


  }

}
