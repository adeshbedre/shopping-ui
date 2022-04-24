/**
 * Created by andrew.yang on 7/27/2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import { registrationRoutes} from "./registration.routes";
import {SharedModule} from "../../shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from "./registration.component";
//import {RegistrationComponent} from "./registration.component";

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RouterModule.forChild(registrationRoutes)
    ],
    declarations: [
        RegistrationComponent
    ]
})
export class RegistrationModule { }