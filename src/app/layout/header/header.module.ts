import { LanguageWrapperComponent } from './language-wrapper/language-wrapper.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { SearchAreaComponent } from './search-area/search-area.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { LogoAndNavigationComponent } from './logo-and-navigation/logo-and-navigation.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LanguageWrapperComponent,
    SearchAreaComponent,
    UserCartComponent,
    MobileMenuComponent,
    LogoAndNavigationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: []
})
export class HeaderModule { }
