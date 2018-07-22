import { Routes } from "@angular/router";
import { HomeViewComponent } from "./controllers/home/home-view/home-view.component";
import { LoginViewComponent } from "./controllers/login/login-view/login-view.component";

export const appRoutes: Routes = [
    { path: 'login',
      component: LoginViewComponent },
    { path: 'home',
      component: HomeViewComponent },
    { path: '',
      redirectTo: 'home',
      pathMatch: 'full' }
  ];
