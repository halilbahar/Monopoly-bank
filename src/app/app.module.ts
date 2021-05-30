import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { MultiTransactionComponent } from './pages/multi-transaction/multi-transaction.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SingleTransactionComponent } from './pages/single-transaction/single-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    MultiTransactionComponent,
    SingleTransactionComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/'),
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
