import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MyLandingComponent} from "./my-landing.component";



@NgModule({
    imports: [RouterModule.forChild([
        { path: 'my-landing', component: MyLandingComponent  }
    ])],
    exports: [RouterModule]
})
export class MyLandingRoutingModule { }
