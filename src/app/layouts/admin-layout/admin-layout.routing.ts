import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { AdminproductComponent } from '../../adminproduct/adminproduct.component';
import { AddproductComponent } from '../../addproduct/addproduct.component';
import { EditproductComponent } from '../../editproduct/editproduct.component';


export const AdminLayoutRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'admin/product',
        component: AdminproductComponent
    },
    {
        path: 'admin/addproduct',
        component: AddproductComponent
    },
    {
        path: 'admin/product/:id',
        component: EditproductComponent
    }
];
