import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from "src/app/interfaces/good.interface"
import { GoodsService } from 'src/app/services/goods.service';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  goods: Good[] = [];
  goodObserbable: Subscription;
  add: number = -1

  constructor(
    private gs: GoodsService,
    private cs: CartService
    ) { }

  ngOnInit() {
    this.goodObserbable = this.gs.getAllGoods().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()

        }
      })
    })
  }

  addToCart(index: number){
    this.add = +index
  }
  buy(amount: number){
    let selectedGood = this.goods[this.add]
    let data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price,
    }
    this.cs.addToCart(data).then(() => this.add = -1)
  }

  ngOnDestroy(){
    this.goodObserbable.unsubscribe
  }





}
