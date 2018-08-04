import { Routes } from '@angular/router';
import { HomeViewComponent } from './controllers/home/home-view/home-view.component';
import { LoginViewComponent } from './controllers/login/login-view/login-view.component';
import { AuthGuard } from './filters/guards/auth.guard';
import { LogoutComponent } from './controllers/logout/logout.component';
import { ShowRoomViewComponent } from './controllers/show-room/show-room-view/show-room-view.component';

export const appRoutes: Routes = [
  { path: 'show-room',
    component: ShowRoomViewComponent },
  { path: 'login',
    component: LoginViewComponent },
  { path: 'logout',
    component: LogoutComponent },
  { path: 'home',
    component: HomeViewComponent,
    canActivate: [AuthGuard] },
  { path: '',
    redirectTo: 'show-room',
    pathMatch: 'full' }
];
