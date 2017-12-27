import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';
import { ItemListService } from './../../services/item-list/item-list.service';
import { ToastService } from './../../services/toast.service';


@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItem {

  item: Item = {
  		name: '',
  		quantity: undefined,
  		price: undefined
  } 	

  constructor(public navCtrl: NavController, public navParams: NavParams, private items: ItemListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItem');
  }

  addItem(item:Item){
  	this.items.addItem(item).then(ref => {
  		this.toast.show(`${item.name} added`);
  		this.navCtrl.setRoot('HomePage', {key: ref.key});
  	});
  }

}
