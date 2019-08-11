import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListTargetsComponent } from './list-targets/list-targets.component';
import { TargetsService } from './targets.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewTargetsComponent } from './list-targets/view-targets/view-targets.component';
import { CreateTargetComponent } from './create-target/create-target.component';
import { DollarPipe } from './pipes/dollar.pipe';
const appRoutes: Routes = [
  {path: 'list', component : ListTargetsComponent},
  {path: 'edit/:id', component: CreateTargetComponent},
  {path: 'create', component: CreateTargetComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListTargetsComponent,
    ViewTargetsComponent,
    CreateTargetComponent,
    DollarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TargetsService ],
  bootstrap: [AppComponent]
})
export class AppModule {}

