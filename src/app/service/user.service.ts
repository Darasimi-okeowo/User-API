import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Response } from '../interface/response.interface';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api';
    // private readonly apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  //Fetch user
  getUsers(size: number = 10): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?results=${size}`).pipe(
      map(response => this.processResponse(response))
    );
  }

    // //Fetch one user using their UUID
    // getUser(uuid: number = 1): Observable<any>{
    //   return this.http.get<any>(`${this.apiUrl}/?results=${uuid}`)
    // }


  //Fetch one user using their UUID
  getUser(uuid: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?results=${uuid}`).pipe(
      map(response => this.processResponse(response))
    );
  }

  private processResponse(response: Response): Response{
    return{
      info: {...response.info},
      results: response.results.map((user: any) => (<User>{
        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        username: user.login.username,
        gender: user.gender,
        address: `${user.location.street.name}, ${user.location.street.number}, ${user.location.city}, ${user.location.country}`,
        dateOfBirth: user.dob.date,
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinate: {latitude: +user.location.coordinates.latitude, longitude: +user.location.coordinates.longitude}


      }))
    }
  }
}
