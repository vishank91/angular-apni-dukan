import { Routes } from '@angular/router';
import { ErrorPage } from './front/pages/error-page/error-page';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./front/front-module").then(m => m.FrontModule)
    },
    {
        path: "user",
        loadChildren: () => import("./user/user-module").then(m => m.UserModule)
    },
    {
        path: "admin",
        loadChildren: () => import("./admin/admin-module").then(m => m.AdminModule)
    },
    {
        path: "**",
        component: ErrorPage
    }
];
