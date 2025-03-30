import { Routes } from '@angular/router';
import { HomeComponent } from './PAGE/home/home.component';
import { ProductsComponent } from './PAGE/products/products.component';
import { ContactComponent } from './PAGE/contact/contact.component';
import { ProductviewComponent } from './PAGE/productview/productview.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'productview/:id', 
        component:ProductviewComponent
    }
];

