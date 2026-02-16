import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClientsComponent } from './clients/clients.component';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { PacksComponent } from './packs/packs.component';
import { AbonnementsComponent } from './abonnements/abonnements.component';
import { MaterielsComponent } from './materiels/materiels.component';
import { LogicielsComponent } from './logiciels/logiciels.component';
import { ConcurrentsComponent } from './concurrents/concurrents.component';
import { AvisClientsComponent } from './avis-clients/avis-clients.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // page par défaut → login
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'ajouter-client', component: AjouterClientComponent },
  { path: 'packs', component: PacksComponent },
  { path: 'abonnements', component: AbonnementsComponent },
  { path: 'materiels', component: MaterielsComponent },
  { path: 'logiciels', component: LogicielsComponent },
  { path: 'concurrents', component: ConcurrentsComponent },
  { path: 'avis-clients', component: AvisClientsComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
