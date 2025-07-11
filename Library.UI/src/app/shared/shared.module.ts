import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from '../components/page-header/page-header.component';
import { PageFooterComponent } from '../components/page-footer/page-footer.component';
import { PageSideNavComponent } from '../components/page-side-nav/page-side-nav.component';
import {  RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PageSideNavComponent,
    PageNotFoundComponent,
  ],
  imports: [RouterModule, CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    // Exporting components so they can be used in other modules
    PageHeaderComponent,
    PageFooterComponent,
    PageSideNavComponent,
    PageNotFoundComponent,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
