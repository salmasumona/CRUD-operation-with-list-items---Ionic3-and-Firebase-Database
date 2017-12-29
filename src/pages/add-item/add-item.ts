import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { Item } from './../../models/item/item.model';
import { ItemListService } from './../../services/item-list/item-list.service';
import { ToastService } from './../../services/toast.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItem {
  public form   : FormGroup;
  item: Item = {
  		name: '',
  		quantity: undefined,
  		price: undefined
  } 	

  constructor(public navCtrl: NavController, public navParams: NavParams, private items: ItemListService, private toast: ToastService, private _formBuilder: FormBuilder) {
              this.form    = _formBuilder.group({
                 'name'           : ['', Validators.required],
                 'quantity'       : ['', Validators.required],
                 'price'          : ['', Validators.required]
              });
              this.name = this.form.controls['name'];
              this.quantity = this.form.controls['quantity'];
              this.price = this.form.controls['price'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItem');
  }

  isValid(field: string) {
    let formField = this.form.find(field);
    return formField.valid || formField.pristine;
  }

  addItem(item:Item){
    console.log('item-----',item);
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

  	this.items.addItem(item).then(ref => {
  		this.toast.show(`${item.name} added`);
  		this.navCtrl.setRoot('HomePage', {key: ref.key});
  	});
  }

}
