import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from "@constants";
import { UserProfileComponent } from './user-profile.component';
import { MyOrdersComponent } from "./pages/my-orders/my-orders.component";
import { ReviewsComponent } from "./pages/reviews/reviews.component";

const routes: Routes = [
    {
        path: '',
        component: UserProfileComponent
    },
    {
        path: AppRoutes.REVIEWS, component: ReviewsComponent
    },
    {
        path: AppRoutes.ORDERS, component: MyOrdersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserProfileRoutingModule {
}
