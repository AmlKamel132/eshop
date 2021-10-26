import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';
import { ProductsModule } from '@bluebitscourse/products';
import { UiModule } from '@bluebitscourse/ui';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrdersModule } from '@bluebitscourse/orders';
import { MessagesComponent } from './shared/messages/messages.component';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { JwtInterceptor, UsersModule } from '@bluebitscourse/users';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NgxStripeModule } from 'ngx-stripe';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
];

@NgModule({
    declarations: [AppComponent, HomePageComponent, HeaderComponent, FooterComponent, NavComponent, MessagesComponent],
    imports: [
        UsersModule,
        ToastModule,
        OrdersModule,
        HttpClientModule,
        BrowserModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        BrowserAnimationsModule,
        AccordionModule,
        ProductsModule,
        UiModule,
        NgxStripeModule.forRoot('pk_test_51JUmRNL9tzFH3U3pWy5xbzypVk5sdH9WvaLXTVB6xDYDG7n49KGBmDyle6U0r78WfmzgzEPRCLn7V7BmwM36Hui1009Kha6I7I')
    ],
    providers: [MessageService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor , multi:true }],
    bootstrap: [AppComponent],
    exports: [MessagesComponent],
})
export class AppModule {}
