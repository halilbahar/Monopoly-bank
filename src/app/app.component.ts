import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monopoly-bank';

  languages = [
    { code: 'en', name: 'ENGLISH' },
    { code: 'de', name: 'GERMAN' }
  ];

  constructor(private translateSerivce: TranslateService) {}

  changeLanguage(code: string) {
    this.translateSerivce.use(code);
  }
}
