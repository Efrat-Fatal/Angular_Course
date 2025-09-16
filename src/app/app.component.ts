import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ getGreeting() }}</h2>
    <h1>{{ title }}</h1>
  `
})
export class AppComponent {
  title: string = 'קורס אנגולר בשיטה עצמית';

  getGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'בוקר טוב';
    if (hour < 18) return 'צהריים טובים';
    return 'ערב טוב';
  }
}

