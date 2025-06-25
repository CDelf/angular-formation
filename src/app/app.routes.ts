import { Routes } from '@angular/router';
import {Home} from '../components/ex9/home/home';
import {About} from '../components/ex9/about/about';
import {UserComponent} from '../components/ex9/user-component/user-component';
import {Dashboard} from '../components/ex9/dashboard/dashboard';
import {StatsComponent} from '../components/ex9/stats-component/stats-component';
import {SettingsComponent} from '../components/ex9/settings-component/settings-component';
import {UserInfo} from '../components/ex2/user-info/user-info';
import {UserPageComponent} from '../components/ex2/user-page-component/user-page-component';
import {NotFound} from '../components/ex9/not-found/not-found';
import {Login} from '../components/ex9/login/login';
import {Profile} from '../components/ex9/profile/profile';
import {authGuard} from '../auth/auth.guard';

export const routes: Routes = [
  {path:  'home', component: Home},
  {path: 'about', component: About},
  {path : 'user/:id', component: UserComponent, children: [
      {path:'info', component: UserInfo},
      {path:'page', component: UserPageComponent}
    ]},
  {path : 'dashboard', component: Dashboard, children: [
      {path: 'stats', component: StatsComponent},
      {path: 'settings', component: SettingsComponent}
    ]},
  {path:'login', component:Login},
  {path:'profile', component:Profile, canActivate: [authGuard]},
  { path: '**', component: NotFound }
];
