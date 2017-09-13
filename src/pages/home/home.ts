import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPlanetaPage } from '../add-planeta/add-planeta';
import { PlanetaDaoProvider } from '../../providers/planeta/planeta-dao';
import { Planeta } from '../../providers/planeta/planeta';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public dao:PlanetaDaoProvider) {}

  loadPlanetas(){}

  goToAdd(){
    this.navCtrl.push(AddPlanetaPage);
  }

}
