import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';
import { ItemListService } from './../../services/item-list/item-list.service';
import { ToastService } from './../../services/toast.service';


@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItem {

  item: Item; 	

  constructor(public navCtrl: NavController, public navParams: NavParams, private items: ItemListService, private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }

  updateItem(item:Item){
    if(item.name==''){
        this.toast.show('Name is required');
        return false;
    }
    if(item.quantity==''){
        this.toast.show('Quantity is required');
        return false;
    }
    if(item.price==''){
        this.toast.show('Price is required');
        return false;
    }
  	this.items.editItem(item).then(() => {
  		this.toast.show(`${item.name} Updated`);
  		this.navCtrl.setRoot('HomePage');
  	});
  }

  removeItem(item:Item){
  	this.items.removeItem(item).then(() => {
  		this.toast.show(`${item.name} Deleted`);
  		this.navCtrl.setRoot('HomePage');
  	});
  }


}
