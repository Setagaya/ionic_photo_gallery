import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//// 20200921 Added Start
import { defineCustomElements } from '@ionic/pwa-elements/loader';
// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
//// 20200921 Added End

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
