import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { IndicatorComponent } from './indicator.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatGridListModule,
  ],
  declarations: [AppComponent, IndicatorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
