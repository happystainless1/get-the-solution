import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './components/app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
