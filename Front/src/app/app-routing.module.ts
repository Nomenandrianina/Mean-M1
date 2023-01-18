import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      },
      {
        path: 'default',
        loadComponent: () => import('./demo/default/default.component')
      },
      {
        path: 'typography',
        loadComponent: () => import('./demo/elements/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./demo/elements/element-color/element-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/sample-page/sample-page.component')
      },
      {
        path: 'home/client',
        loadComponent: () => import('./demo/client/home/home.component')
      },
      {
        path: 'bon_entree',
        loadComponent: () => import('./demo/client/bon-entre/bon-entre.component')
      },
      {
        path: 'list_reparation',
        loadComponent: () => import('./demo/client/reparation/reparation.component')
      },
      {
        path: 'facture',
        loadComponent: () => import('./demo/client/facture/facture.component')
      },
      {
        path: 'atelier/bon_sortie',
        loadComponent: () => import('./demo/atelier/bon-sortie/bon-sortie.component')
      },
      {
        path: 'atelier/reception',
        loadComponent: () => import('./demo/atelier/reception/reception.component')
      },
      {
        path: 'atelier/ajout_reparation',
        loadComponent: () => import('./demo/atelier/reparation/reparation.component')
      },
      {
        path: 'atelier/list_reparation',
        loadComponent: () => import('./demo/atelier/list-car/list-car.component')
      },
      {
        path: 'atelier/detail_reparation/:id',
        loadComponent: () => import('./demo/atelier/detail/detail.component')
      },
      {
        path: 'home/atelier',
        loadComponent: () => import('./demo/atelier/home/home.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'guest',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
