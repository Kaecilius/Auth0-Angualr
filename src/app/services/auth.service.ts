import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-nh-xb7m0.us.auth0.com',
      clientId: '8GeuqCOxxePFWV5UD85UeaaPIEaRPJVX'
    }),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}