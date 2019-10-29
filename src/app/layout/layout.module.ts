import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';

@NgModule({
  declarations: [SidebarComponent, MasterLayoutComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, MasterLayoutComponent]
})
export class LayoutModule {}
