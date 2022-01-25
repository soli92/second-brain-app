import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // let newRequest;
    if (request.url.indexOf('i18n') === -1) {
      if (!/^(http|https):/i.test(request.url)) {
        // if (request.url.indexOf('CmsService') > -1) {
        //   request = request.clone({url: environment.cmsApiUrl + request.url});
        // } else if (request.url.indexOf('HelpService') > -1 || request.url.indexOf('DataServices') > -1) {
        //   request = request.clone({url: environment.cmsBEApiUrl + request.url});

        // } else {
        //   request = request.clone({url: environment.omegaApiUrl + request.url});

        // }

      }
    }

    return next.handle(request);
  }
}
