import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/home/home.component';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
