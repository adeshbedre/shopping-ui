/**
 * Created by andrew.yang on 7/27/2017.
 */
import {CartPageComponent} from "./cart-page.component";
import { CheckoutPageComponent } from "./checkout-page.component";

export const cartPageRoutes=[
    {
        path:'',
        component:CartPageComponent
    },
    {
        path:'checkout',
        component: CheckoutPageComponent
    }
];