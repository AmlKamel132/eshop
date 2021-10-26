import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'orders-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit {

  cartCount:Number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {


  //  this.cartCount = this.cartService.getCart().items?.length ?? 0;
  this.cartService.cart$.subscribe((cart) => {
      this.cartCount = cart?.items?.length ?? 0;
    });
    
  }

}
