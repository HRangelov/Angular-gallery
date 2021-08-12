import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '../core/injection-tokens';
import { IUser } from '../shared/interfaces';

const apiURL = environment.apiURL;


@Injectable()
export class UserService {
  user: IUser | null | undefined = undefined;
  
  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
    // @Inject(LocalStorage) private localStorage: Window['localStorage']
    ) 
    {
    // try {
    //   const localStorageUser = this.localStorage.getItem('<USER>') || 'ERROR';
    //   this.user = JSON.parse(localStorageUser);
    // } catch {
    //   this.user = undefined;
    // }
  }
  
  // login(email: string, password: string): void {
    // this.user = {
    //   email,
    //   firstName: 'John',
    //   lastName: 'Doe'
    // }
    // this.localStorage.setItem('<USER>', JSON.stringify(this.user));
  // }
  login(data: { email: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/users/login`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }

  register(data: {username: string; email: string; tel: string; password: string}){
    return this.http.post<IUser>(`${apiURL}/users/register`, data, {withCredentials: true}).pipe(
      tap((user) => this.user = user)
    );
  }
  getProfileInfo() {
    return this.http.get<IUser>(`${apiURL}/users/profile`, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    )
  }
  // logout(): void {
  //   this.user = undefined;
  //   this.localStorage.removeItem('<USER>');
  // }
  logout() {
    return this.http.post<IUser>(`${apiURL}/users/logout`, {}, { withCredentials: true }).pipe(
      tap(() => this.user = null)
    );
  }
  updateProfile(data: { username: string; email: string; tel: string; }) {
    return this.http.put<IUser>(`${apiURL}/users/profile`, data, { withCredentials: true }).pipe(
      tap((user) => this.user = user)
    );
  }
}
