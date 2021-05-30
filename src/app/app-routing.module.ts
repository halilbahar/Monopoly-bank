import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameGuard } from './core/guard/game.guard';
import { NoGameGuard } from './core/guard/no-game.guard';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { MultiTransactionComponent } from './pages/multi-transaction/multi-transaction.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SingleTransactionComponent } from './pages/single-transaction/single-transaction.component';

const routes: Routes = [
  { path: '', canActivate: [NoGameGuard], component: HomeComponent },
  {
    path: '',
    canActivate: [GameGuard],
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'single-transaction', component: SingleTransactionComponent },
      { path: 'multi-transaction', component: MultiTransactionComponent },
      { path: 'leaderboard', component: LeaderboardComponent }
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
