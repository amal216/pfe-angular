import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { CalendarModule } from 'primeng/calendar';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
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
    AjouterConcurrentComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ScrollPanelModule,
    CalendarModule,
    TabViewModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
