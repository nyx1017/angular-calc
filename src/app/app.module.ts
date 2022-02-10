import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { DividedToZeroDirective } from './directives/divided-to-zero.directive';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    CalculateComponent,
    DividedToZeroDirective,
    BackgroundColorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
