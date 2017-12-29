import { Component } from '@angular/core';
import { NavController, IonicPage,NavParams } from 'ionic-angular';
import { ItemListService } from './../../services/item-list/item-list.service';
import { Observable} from 'rxjs/Observable';
import { Item } from './../../models/item/item.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  itemsList$ : Observable<Item[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private items: ItemListService) {
  		this.itemsList$ = this.items
			 .getItemList()
			 .snapshotChanges()
			 .map(
			 changes => {
	 		  return changes.map(c =>({
		 			key: c.payload.key, ...c.payload.val()
		 		}));
      });
  }
}
