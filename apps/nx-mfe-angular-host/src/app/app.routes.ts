import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'nx-mfe-angular-remote',
    loadChildren: () =>
      import('nx-mfe-angular-remote/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'nx-mfe-react-remote',
    loadChildren: () =>
      import('nx-mfe-react-remote/Module').then((m) => m.RemoteEntryModule),
    // component: WebComponentWrapper,
    // data: {
    //   remoteEntry: 'http://localhost:4001/remoteEntry.js',
    //   remoteName: 'nx-mfe-react-remote',
    //   exposedModule: './Module',
    // } as WebComponentWrapperOptions,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
