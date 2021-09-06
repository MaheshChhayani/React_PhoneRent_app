import { Inject, Injectable } from '@angular/core';
import { AuthResponse } from './auth-response';
import { ReviewsService } from './reviews.service';
import { BROWSER_STORAGE } from './storage';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(BROWSER_STORAGE) private storage: Storage,
  private reviewService:ReviewsService) { }

  public getToken(): string {
    return this.storage.getItem('app-token');
  }

  public saveToken(token: string): void {
    this.storage.setItem('app-token', token);
  }

  public login(user: User): Promise<any> {
    return this.reviewService.login(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public register(user: User): Promise<any> {
    return this.reviewService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout(): void {
    this.storage.removeItem('app-token');
  }

  public isLoggedIn(): boolean {
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public getCurrentUser(): User {
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } = JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
  }
}
