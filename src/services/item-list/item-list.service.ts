import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Item } from './../../models/item/item.model';

@Injectable()
export class ItemListService{

	private itemListRef = this.db.list<Item>('item-list');

	constructor(private db:AngularFireDatabase){}

	getItemList(){
		return this.itemListRef;
	}

	addItem(item:Item){
		return this.itemListRef.push(item);
	}

	editItem(item:Item){
		return this.itemListRef.update(item.key, item);
	}

	removeItem(item:Item){
		return this.itemListRef.remove(item.key);
	}
}