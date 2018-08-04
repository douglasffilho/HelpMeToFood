import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './controllers/login/login-view/login-view.component';
import { HomeViewComponent } from './controllers/home/home-view/home-view.component';
import { RouterComponent } from './controllers/router/router.component';
import { AuthGuard } from './filters/guards/auth.guard';
import { LogoutComponent } from './controllers/logout/logout.component';
import { LoaderComponent } from './controllers/loader/loader.component';
import { ShowRoomViewComponent } from './controllers/show-room/show-room-view/show-room-view.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    HomeViewComponent,
    RouterComponent,
    LogoutComponent,
    LoaderComponent,
    ShowRoomViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt'},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
