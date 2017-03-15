import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from "./common/common.module";
import { PageNotFoundComponent } from "./common/pageNotFound.component";

export const APP_ROUTES: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [ RouterModule ],
  providers: []
})
export class AppRoutingModule {}
