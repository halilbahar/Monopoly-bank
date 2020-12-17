import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(
    public playerService: PlayerService
  ) { }

  ngOnInit(): void {
  }

}
