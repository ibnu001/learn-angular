import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor(private readonly router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          Swal.fire('Unauthorized')
          console.log(err.status)
          this.router.navigateByUrl('/');
        } else if (err.status === 404) {
          Swal.fire('Page Not Found')
          console.log(err.status)
          this.router.navigateByUrl('/pages/list');
        }
        return throwError(() => err)
      })
    )
  }
}
