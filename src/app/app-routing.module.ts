import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { BioComponent } from './speakers/bio/bio.component';
import { ProductComponent } from './speakers/product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'speakers',
    component: SpeakersComponent,
    children: [
      { path: 'speakersList', component: SpeakersListComponent, outlet: 'list' },
      { path: ':id', component: BioComponent, outlet: 'bio' },
      { path: ':id', component: ProductComponent, outlet: 'product' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
