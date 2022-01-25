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
    CommonModule,
    HttpClientModule,
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
    HttpService,
    {
      provide: HttpClient,
      useClass: HttpService,
    }
  ],
  exports: []
})
export class CoreModule { }
