import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlayerService } from '../services/player.service';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  canActivate(): boolean | UrlTree {
    return this.playerService.players.value.length > 0 ? true : this.router.createUrlTree(['/']);
  }
}
