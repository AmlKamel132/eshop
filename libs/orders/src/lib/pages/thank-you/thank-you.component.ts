import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'orders-thank-you-page',
  templateUrl: './thank-you.component.html',
  styles: [
  ]
})
export class ThankYouComponent implements OnInit {

  constructor(private ordersService:OrdersService,private cartService:CartService) { }

  ngOnInit(): void {


    const orderData = this.ordersService.getCacheOrderData();

    
    this.ordersService.createOrder(orderData).subscribe(
      () => {
       
        this.cartService.emptyCart();
        // this.router.navigate(['/success']);
      },
      () => {
        //error
      }
    );

  }




}
