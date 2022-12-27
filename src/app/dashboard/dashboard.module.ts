import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, ViewComponent],
  exports: [HomeComponent],
})
export class DashboardModule {}
