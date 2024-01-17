import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { ContentComponent } from './components/content/content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IconComponent } from './components/icon/icon.component';
import { NoStyleButtonComponent } from './components/buttons/no-style-button/no-style-button.component';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { SidebarComponent } from './components/sidebars/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { ItemsMenuComponent } from './components/menu/items-menu/items-menu.component';
import { SlidingSidebarComponent } from './components/sidebars/sliding-sidebar/sliding-sidebar.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ContentComponent,
    ToolbarComponent,
    IconComponent,
    NoStyleButtonComponent,
    IconButtonComponent,
    SidebarComponent,
    MenuComponent,
    ItemsMenuComponent,
    SlidingSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
          'CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
