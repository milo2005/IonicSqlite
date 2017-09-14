import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlanetaDaoProvider } from '../../providers/planeta/planeta-dao';
import { Planeta } from '../../providers/planeta/planeta';

@Component({
  selector: 'page-add-planeta',
  templateUrl: 'add-planeta.html',
})
export class AddPlanetaPage {

  planeta: Planeta;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dao: PlanetaDaoProvider) {
    this.planeta = new Planeta();
  }

  save() {
    this.dao.insert(this.planeta)
      .then(res => this.navCtrl.pop());
  }

}
