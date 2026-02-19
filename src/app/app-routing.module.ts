import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Composants existants
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { AjouterclientComponent } from './clients/ajouter-client/ajouter-client.component';
import { LogicielsComponent } from './logiciels/logiciels.component';
import { AbonnementsComponent } from './abonnements/abonnements.component';
import { AjouterAbonnementComponent } from './abonnements/ajouterabonnement/ajouterabonnement.component';
import { PacksComponent } from './packs/packs.component';
import { AjouterPackComponent } from './packs/ajouterpack/ajouterpack.component';
import { MaterielsComponent } from './materiels/materiels.component';
import { AjouterMaterielComponent } from './materiels/ajoutermateriel/ajoutermateriel.component';
import { ConcurrentsComponent } from './concurrents/concurrents.component';

import { AjouterLogicielComponent } from './logiciels/ajouterlogiciel/ajouterlogiciel.component';
import { AjouterConcurrentComponent } from './concurrents/ajouterconcurrent/ajouterconcurrent.component';
import { AvisClientComponent } from './avis-clients/avis-clients.component';

const routes: Routes = [
  // Page par défaut
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Authentification
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Dashboard
  { path: 'dashboard', component: DashboardComponent },

  // Clients
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/ajouter', component: AjouterclientComponent },

  { path: 'logiciels', component: LogicielsComponent },
  { path: 'logiciels/ajouter', component: AjouterLogicielComponent },
  { path: 'logiciels/ajouter/:id', component: AjouterLogicielComponent },

  // Abonnements
  { path: 'abonnements', component: AbonnementsComponent },
  { path: 'abonnements/ajouter', component: AjouterAbonnementComponent },

  { path: 'packs', component: PacksComponent },
  { path: 'packs/ajouter', component: AjouterPackComponent },
  { path: 'packs/ajouter/:id', component: AjouterPackComponent },

  { path: 'materiels', component: MaterielsComponent },
  { path: 'materiels/ajouter', component: AjouterMaterielComponent },
  { path: 'materiels/ajouter/:id', component: AjouterMaterielComponent },

  // Concurrents
  { path: 'concurrents', component: ConcurrentsComponent },
  { path: 'concurrents/ajouter', component: AjouterConcurrentComponent },
  { path: 'concurrents/ajouter/:id', component: AjouterConcurrentComponent }, // modification

  // Avis clients
  { path: 'avis-clients', component: AvisClientComponent },

  // Fallback (toute autre route)
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
