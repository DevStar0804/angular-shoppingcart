import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig} from '@angular/router-deprecated';

import {PageTop, ContentTop, Sidebar} from '../theme/components';

import {Dashboard} from './dashboard';
import {Ui} from './ui';
import {Maps} from './maps';
import {Charts} from './charts';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  directives: [PageTop, Sidebar, ContentTop],
  template: `
    <sidebar></sidebar>
    <page-top></page-top>
    <div class="al-main">
      <div class="al-content">
        <content-top></content-top>
        <router-outlet></router-outlet>
      </div>
    </div>`
})
@RouteConfig([
  {
    name: 'Dashboard',
    component: Dashboard,
    path: '/dashboard',
    useAsDefault: true,
  },
  {
    name: 'Ui',
    component: Ui,
    path: '/ui/...',
  },
  {
    name: 'Maps',
    component: Maps,
    path: '/maps/...',
  },
  {
    name: 'Charts',
    component: Charts,
    path: '/charts/...',
  },
])
export class Pages {

  constructor() {
  }

  ngOnInit() {
  }
}
