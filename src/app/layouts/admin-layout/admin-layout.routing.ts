import { Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { AdminproductComponent } from '../../adminproduct/adminproduct.component';
import { AddproductComponent } from '../../addproduct/addproduct.component';
import { EditproductComponent } from '../../editproduct/editproduct.component';
import { AdminGuard } from 'src/app/_helpers/admin.guard';


export const AdminLayoutRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'admin/product',
        component: AdminproductComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'admin/addproduct',
        component: AddproductComponent,
        canActivate: [AdminGuard]
    },
    {
        path: 'admin/product/:id',
        component: EditproductComponent,
        canActivate: [AdminGuard]
    }
];
