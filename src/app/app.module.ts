import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

import { PacksComponent } from './packs/packs.component';
import { AjouterPackComponent } from './packs/ajouterpack/ajouterpack.component';

import { ClientsComponent } from './clients/clients.component';
import { AjouterclientComponent } from './clients/ajouter-client/ajouter-client.component';

import { LogicielsComponent } from './logiciels/logiciels.component';
import { AjouterLogicielComponent } from './logiciels/ajouterlogiciel/ajouterlogiciel.component';

import { AbonnementsComponent } from './abonnements/abonnements.component';
import { AjouterAbonnementComponent } from './abonnements/ajouterabonnement/ajouterabonnement.component';

import { MaterielsComponent } from './materiels/materiels.component';
import { AjouterMaterielComponent } from './materiels/ajoutermateriel/ajoutermateriel.component';

import { AvisClientComponent } from './avis-clients/avis-clients.component';
import { AjouterAvisClientComponent } from './avis-clients/ajouteravisclient/ajouteravisclient.component';

import { ConcurrentsComponent } from './concurrents/concurrents.component';
import { AjouterConcurrentComponent } from './concurrents/ajouterconcurrent/ajouterconcurrent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    PacksComponent,
    AjouterPackComponent,
    ClientsComponent,
    AjouterclientComponent,
    LogicielsComponent,
    AjouterLogicielComponent,
    AbonnementsComponent,
    AjouterAbonnementComponent,
    MaterielsComponent,
    AjouterMaterielComponent,
    AvisClientComponent,
    AjouterAvisClientComponent,
    ConcurrentsComponent,
    AjouterConcurrentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [], // tous les services sont déjà 'providedIn: root'
  bootstrap: [AppComponent]
})
export class AppModule { }
