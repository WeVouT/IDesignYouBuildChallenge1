import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LinkMenuComponent } from './components/link-menu/link-menu.component';
import { ContentComponent } from './components/content/content.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BottomBannerComponent } from './components/bottom-banner/bottom-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuBarComponent,
    LinkMenuComponent,
    ContentComponent,
    TopMenuComponent,
    BottomBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
