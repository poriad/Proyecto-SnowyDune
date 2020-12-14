import { TokenService } from 'src/app/service/token.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;

    if (intReq.url.includes('imgur')) {
      return next.handle(intReq);
    }

    const token = this.tokenService.getToken();

    if (token != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) })
    }

    return next.handle(intReq);

  }
}

export const interceptorProvider = [{ provide: HTTP_INTERCEPTORS, useClass: ProdInterceptorService, multi: true }];
