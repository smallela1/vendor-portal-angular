import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/modules/core/services/core-services.module';

@Component({
  selector: 'app-e-sell-header',
  templateUrl: './e-sell-header.component.html',
  styleUrls: ['./e-sell-header.component.scss']
})
export class ESellHeaderComponent implements OnInit, OnDestroy {
  
  $loginObservable: Subscription;

  isCollapsed = false; 
  isLoggedIn: boolean = false;

  constructor(private loginSvc: LoginService, private router: Router ) {
    this.isLoggedIn = loginSvc.getLogin().isLoggedIn;
    console.log("user is logged in? " + this.isLoggedIn);
   }

   signOut(): void {
     this.loginSvc.signOut();
   }

  ngOnInit(): void {

    this.$loginObservable = this.loginSvc.loginSubject.subscribe({
      next: (login) => {
        this.isLoggedIn = login.isLoggedIn;
        console.log("user is logged in?" + this.isLoggedIn);
        
        if (!this.isLoggedIn) {
          console.log('logout was successful');
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
      }
    })
    
  }

  ngOnDestroy(): void {
      this.$loginObservable.unsubscribe();
  }

}
