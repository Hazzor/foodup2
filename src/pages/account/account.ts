import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  profileSelected() {
    let login = this.modalCtrl.create(LoginPage);
    login.present();
  }

}
