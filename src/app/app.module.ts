import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AnimeFormComponent} from './anime/anime-form/anime-form.component';
import {AnimeListComponent} from './anime/anime-list/anime-list.component';
import {ForbiddenNameDirective} from './shared/utils/forbidden-name/forbidden-name.directive';
import {ExponentPipe} from './shared/pipes/exponent.pipe';
import {AgePipe} from './shared/pipes/age.pipe';
import {NotFoundComponent} from './shared/component/not-found/not-found.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LoginComponent} from './auth/login/login.component';
import {AuthInterceptor} from "./auth/interceptor/auth.interceptor";
import {ResponseInterceptor} from "./auth/interceptor/response.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    AnimeFormComponent,
    AnimeListComponent,
    ForbiddenNameDirective,
    ExponentPipe,
    AgePipe,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
