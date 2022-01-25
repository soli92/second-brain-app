import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiPrefixInterceptor } from './http/interceptors/api-prefix.interceptor';
import { ErrorHandlerInterceptor } from './http/interceptors/error-handler.interceptor';
import { CacheInterceptor } from './http/interceptors/cache.interceptor';
import { HttpService } from './http/services/http.service';

export const httpInterceptors = [
  ApiPrefixInterceptor,
  ErrorHandlerInterceptor,
  CacheInterceptor,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ...httpInterceptors,
    HttpService,
    {
      provide: HttpClient,
      useClass: HttpService,
    },
  ],
  exports: [
  ]
})
export class CoreModule { }
