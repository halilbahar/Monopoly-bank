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

  constructor(private translateSerivce: TranslateService) {
    const code = localStorage.getItem('monopoly-bank.language');
    if (code) {
      this.translateSerivce.use(code);
    }
  }

  changeLanguage(code: string) {
    this.translateSerivce.use(code);
    localStorage.setItem('monopoly-bank.language', code);
  }
}
