import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { AjouterAvisClientComponent } from './avis-clients/ajouteravisclient/ajouteravisclient.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
  { path: 'clients/ajouter', component: AjouterclientComponent, canActivate: [AuthGuard] },
  { path: 'clients/modifier/:id', component: AjouterclientComponent, canActivate: [AuthGuard] },

  { path: 'logiciels', component: LogicielsComponent, canActivate: [AuthGuard] },
  { path: 'logiciels/ajouter', component: AjouterLogicielComponent, canActivate: [AuthGuard] },
  { path: 'logiciels/ajouter/:id', component: AjouterLogicielComponent, canActivate: [AuthGuard] },

  { path: 'abonnements', component: AbonnementsComponent, canActivate: [AuthGuard] },
  { path: 'abonnements/ajouter', component: AjouterAbonnementComponent, canActivate: [AuthGuard] },
  { path: 'abonnements/ajouter/:id', component: AjouterAbonnementComponent, canActivate: [AuthGuard] },

  { path: 'packs', component: PacksComponent, canActivate: [AuthGuard] },
  { path: 'packs/ajouter', component: AjouterPackComponent, canActivate: [AuthGuard] },
  { path: 'packs/ajouter/:id', component: AjouterPackComponent, canActivate: [AuthGuard] },

  { path: 'materiels', component: MaterielsComponent, canActivate: [AuthGuard] },
  { path: 'materiels/ajouter', component: AjouterMaterielComponent, canActivate: [AuthGuard] },
  { path: 'materiels/ajouter/:id', component: AjouterMaterielComponent, canActivate: [AuthGuard] },

  { path: 'concurrents', component: ConcurrentsComponent, canActivate: [AuthGuard] },
  { path: 'concurrents/ajouter', component: AjouterConcurrentComponent, canActivate: [AuthGuard] },
  { path: 'concurrents/ajouter/:id', component: AjouterConcurrentComponent, canActivate: [AuthGuard] },

  { path: 'avis-clients', component: AvisClientComponent, canActivate: [AuthGuard] },
  { path: 'avis-clients/ajouter', component: AjouterAvisClientComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
