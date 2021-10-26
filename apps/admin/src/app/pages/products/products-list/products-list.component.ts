import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { Product, ProductsService } from '@bluebitscourse/products';
@Component({
    selector: 'admin-products-list',
    templateUrl: './products-list.component.html',
    styles: [],
})
export class ProductsListComponent implements OnInit {
    products: Product[] = [];

    constructor(
        private ProductsService: ProductsService,
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}

    ngOnInit(): void {
        this._getProducts();
    }

    private _getProducts() {
        this.ProductsService.getProducts().subscribe((products) => {
            this.products = products;
        });
    }

    deleteProduct(product_id: string) {
        this.confirmationService.confirm({
            message: 'Do you want to Delete this Product?',
            header: 'Delete Product',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.ProductsService.deleteProduct(product_id).subscribe(
                    () => {
                        this.messageService.add({ severity: 'success', summary: 'success', detail: 'Product Deleted !' });
                        this._getProducts();
                    },
                    () => {
                        this.messageService.add({ severity: 'error', summary: 'error', detail: 'Product Not Deleted !' });
                    }
                );
            },
        });
    }

    updateProduct(product_id: string) {
        this.router.navigateByUrl(`products/form/${product_id}`);
    }
}
