import { Routes } from '@angular/router';
import { HomeViewComponent } from './controllers/home/home-view/home-view.component';
import { LoginViewComponent } from './controllers/login/login-view/login-view.component';
import { AuthGuard } from './filters/guards/auth.guard';
import { LogoutComponent } from './controllers/logout/logout.component';
import { ShowRoomViewComponent } from './controllers/show-room/show-room-view/show-room-view.component';

export const appRoutes: Routes = [
  { path: 'showRoom',
    component: ShowRoomViewComponent },
  { path: 'login',
    component: LoginViewComponent },
  { path: 'logout',
    component: LogoutComponent },
  { path: 'home',
    component: HomeViewComponent,
    canActivate: [AuthGuard] },
  { path: '',
    redirectTo: 'showRoom',
    pathMatch: 'full' }
];
