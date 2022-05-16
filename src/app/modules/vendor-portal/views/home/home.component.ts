import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/core/services/core-services.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private loginSvc: LoginService) { }

  ngOnInit(): void {

    this.loginSvc.signOut();

  }


}
