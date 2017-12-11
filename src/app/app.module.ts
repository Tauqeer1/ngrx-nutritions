import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducer';
import { FoodEffects } from './store/effects';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'angular-material';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NutritionService } from './services/nutriton.service';
@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ reducer: reducer }),
    EffectsModule.forRoot([FoodEffects]),
    RouterModule.forRoot([])
  ],
  providers: [
    NutritionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
