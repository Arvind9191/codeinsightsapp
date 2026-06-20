import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Layout } from './app/shared/layout/layout';

// bootstrapApplication(Layout, appConfig)
//   .catch((err) => console.error(err));
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
