import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Inject, Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { AuthState, OktaAuth } from '@okta/okta-auth-js';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  isAuthenticated$!: Observable<boolean>;
  loginSubject = new Subject<any>();

  constructor(
    private _oktaStateService: OktaAuthStateService, 
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth 
    ) { 

      this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
        filter((s: AuthState) => !!s),
        map((s: AuthState) => s.isAuthenticated ?? false)
      );

    }

  async signIn(): Promise<void> {    
    try {
      await this._oktaAuth.signInWithRedirect({ originalUri: "/offer-portal/org-selection" });

    } catch (error) {
      console.error(error);
    }
  }

  async signOut(): Promise<void> {
    try {
      await this._oktaAuth.signOut();

    } catch (error) {
      console.error(error);
    }
  }


}
