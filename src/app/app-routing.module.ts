import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateComponent } from './calculate/calculate.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  
  { path: '', component: CalculateComponent, pathMatch: 'full'},
  
  { path: 'calculator',component:CalculateComponent, pathMatch: 'full' }
  ,
  { path: 'history', component: HistoryComponent, pathMatch: 'full' }
    
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
