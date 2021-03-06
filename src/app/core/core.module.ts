import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiPrefixInterceptor } from './http/interceptors/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/interceptors/error-handler.interceptor';
import { CacheInterceptor } from './http/interceptors/cache.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { HttpService } from './http/services/http.service';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AmplifyAngularModule, AmplifyModules, AmplifyService } from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import { Interactions } from '@aws-amplify/interactions';
import Storage from '@aws-amplify/storage';
import { Oauth2Guard } from './auth/guards/oauth2.guard';
import { AuthGuardService } from './auth/guards/auth-guard.service';

export const httpInterceptors = [
  ApiPrefixInterceptor,
  ErrorHandlerInterceptor,
  CacheInterceptor,
]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    `${environment.i18nPrefix}/assets/i18n/`,
    '.json'
  );
}

@NgModule({
  declarations: [],
  imports: [
    //AmplifyAngularModule,
    CommonModule,
    HttpClientModule,
    SocialLoginModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    
  ],
  providers: [
    ...httpInterceptors,
    Oauth2Guard,
    AuthGuardService,
    HttpService,
    {
      provide: HttpClient,
      useClass: HttpService,
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.googleAuth.clientId) // your client id
          }
        ]
      }
    },
    {
      provide: AmplifyService,
			useFactory: () => AmplifyModules({ Auth, Storage, Interactions })
    }
  ],
  exports: []
})
export class CoreModule { }
