import { Injectable } from '@angular/core';

export interface NavigationAtelierItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationAtelierItem {
  children?: NavigationAtelierItem[];
}
const NavigationAtelierItems = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'acceuil',
        title: 'Acceuil',
        type: 'item',
        classes: 'nav-item',
        url: '/home/atelier',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'other',
    title: 'Other',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'reception',
        title: 'Reçevoir les voitures',
        type: 'item',
        url: '/reception',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'reparation',
        title: 'Ajout réparation',
        type: 'item',
        classes: 'nav-item',
        url: '/ajout_reparation',
        icon: 'ti ti-vocabulary'
      },
      {
        id: 'sortie',
        title: 'Bon de sortie',
        type: 'item',
        classes: 'nav-item',
        url: '/bon_sortie',
        icon: 'ti ti-vocabulary'
      }
    ]
  }
];

@Injectable()
export class NavigationAtelierItem {
  get() {
    return NavigationAtelierItems;
  }
}
