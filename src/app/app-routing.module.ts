import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CentroComponent } from './components/centro/centro.component';
import { ItemComponent } from './components/item/item.component';


const routes: Routes = [
  {path: 'home', component: CentroComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
