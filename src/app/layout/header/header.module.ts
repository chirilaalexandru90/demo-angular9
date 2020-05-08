import { LanguageWrapperComponent } from './language-wrapper/language-wrapper';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { NgModule } from '@angular/core';
import { SearchAreaComponent } from './search-area/search-area';
import { UserCartComponent } from './user-cart/user-cart';
import { LogoAndNavigationComponent } from './logo-and-navigation/logo-and-navigation';
import { CartEntry } from './user-cart/cart-entry/cart-entry';
import { MobileMenuComponent } from './logo-and-navigation/mobile-menu/mobile-menu';

@NgModule({
  declarations: [
    HeaderComponent,
    LanguageWrapperComponent,
    SearchAreaComponent,
    UserCartComponent,
    MobileMenuComponent,
    LogoAndNavigationComponent,
    CartEntry
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
