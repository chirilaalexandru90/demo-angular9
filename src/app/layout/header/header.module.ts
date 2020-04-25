import { LanguageWrapperComponent } from './language-wrapper/language-wrapper.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { SearchAreaComponent } from './search-area/search-area.component';
import { UserCartComponent } from './user-cart/user-cart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LanguageWrapperComponent,
    SearchAreaComponent,
    UserCartComponent
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
