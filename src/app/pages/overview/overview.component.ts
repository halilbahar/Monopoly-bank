import { PlayerService } from 'src/app/core/services/player.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  constructor(public playerService: PlayerService) {}
}
