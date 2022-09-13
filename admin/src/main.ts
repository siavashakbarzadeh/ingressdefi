import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();

  const script = document.createElement('script');
  script.src = 'assets/secure/secure-prod.js';
  document.head.appendChild(script);
} else {
  // const script = document.createElement('script');
  // script.src = 'assets/secure/secure-prod.js';
  // document.head.appendChild(script);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
