import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { CategoriesService } from './services/categories.service';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RouterModule, Routes } from '@angular/router';

import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';

import { FormsModule } from '@angular/forms';

import {OrdersModule} from '@bluebitscourse/orders';


import {UiModule} from '@bluebitscourse/ui';


const routes: Routes = [
    {
        path: 'products',
        component: ProductsListComponent,
    },
    {
        path: 'category/:categoryid',
        component: ProductsListComponent,
    },
    {
        path: 'products/:productid',
        component: ProductPageComponent,
    },
];

@NgModule({
    imports: [ OrdersModule,UiModule, CommonModule,  RouterModule.forChild(routes), ButtonModule, CheckboxModule, FormsModule, RatingModule, InputNumberModule],
    declarations: [
        ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent,
        ProductPageComponent,
        
    ],
    exports: [ProductsSearchComponent, CategoriesBannerComponent, ProductItemComponent, FeaturedProductsComponent, ProductsListComponent, ProductPageComponent],
    providers: [CategoriesService],
})
export class ProductsModule {}
