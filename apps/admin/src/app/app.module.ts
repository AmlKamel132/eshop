import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';

import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ColorPickerModule } from 'primeng/colorpicker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesService, ProductsService } from '@bluebitscourse/products';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputNumberModule } from 'primeng/inputnumber';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
import { OrdersDetailComponent } from './pages/orders/orders-detail/orders-detail.component';
import { OrdersService } from '@bluebitscourse/orders';
import { FieldsetModule } from 'primeng/fieldset';
import {  JwtInterceptor, UsersModule } from '@bluebitscourse/users';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const UX_MODULE = [
    CardModule,
    ToastModule,
    InputTextModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    ConfirmDialogModule,
    ColorPickerModule,
    InputTextareaModule,
    InputSwitchModule,
    DropdownModule,
    EditorModule,
    InputNumberModule,
    TagModule,
    InputMaskModule,
    FieldsetModule,
];

@NgModule({
    declarations: [
        AppComponent,
        ShellComponent,
        SidebarComponent,
        DashboardComponent,
        CategoriesListComponent,
        CategoriesFormComponent,
        ProductsListComponent,
        ProductsFormComponent,
        UsersListComponent,
        UsersFormComponent,
        OrdersListComponent,
        OrdersDetailComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        UsersModule,
        AppRoutingModule,
        ...UX_MODULE,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
    ],

    providers: [
        OrdersService,
        ProductsService,
        CategoriesService,
        MessageService,
        ConfirmationService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor , multi:true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
