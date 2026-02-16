import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PacksComponent } from './packs/packs.component';
import { LogicielsComponent } from './logiciels/logiciels.component';
import { MaterielsComponent } from './materiels/materiels.component';
import { ConcurrentsComponent } from './concurrents/concurrents.component';
import { AbonnementsComponent } from './abonnements/abonnements.component';
import { ClientsComponent } from './clients/clients.component';
import { AvisClientsComponent } from './avis-clients/avis-clients.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PacksComponent,
    LogicielsComponent,
    MaterielsComponent,
    ConcurrentsComponent,
    AbonnementsComponent,
    ClientsComponent,
    AvisClientsComponent,
    AjouterClientComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
