import { LanguageWrapperComponent } from './language-wrapper/language-wrapper.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { SearchAreaComponent } from './search-area/search-area.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LanguageWrapperComponent,
    SearchAreaComponent
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
