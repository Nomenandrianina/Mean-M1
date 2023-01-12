import { Injectable } from '@angular/core';

export interface NavigationClientItem {
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

export interface Navigation extends NavigationClientItem {
  children?: NavigationClientItem[];
}
const NavigationclientItems = [
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
        url: '/home',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'paper',
    title: 'Paper',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'bon',
        title: 'Bon d"entrée',
        type: 'item',
        url: '/bon_entree',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'reparation',
        title: 'Réparation',
        type: 'item',
        classes: 'nav-item',
        url: '/reparation',
        icon: 'ti ti-vocabulary'
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
        id: 'facture',
        title: 'Facture',
        type: 'item',
        url: '/facture',
        classes: 'nav-item',
        icon: 'ti ti-brand-chrome'
      },
      {
        id: 'etat de paiement',
        title: 'Paiement',
        type: 'item',
        classes: 'nav-item',
        url: 'https://codedthemes.gitbook.io/berry-angular/',
        icon: 'ti ti-vocabulary',
        target: true,
        external: true
      }
    ]
  }
];

@Injectable()
export class NavigationClientItem {
  get() {
    return NavigationclientItems;
  }
}
