import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Response } from '../interface/response.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root'})
export class UserResolver implements Resolve<Response>{
  constructor(private userService: UserService) {  }

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Response>{
    return this.userService.getUser(route.paramMap.get('uuid')!)
  }
};
