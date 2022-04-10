import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/core-services.module';

@Component({
  selector: 'app-access-point',
  templateUrl: './access-point.component.html',
  styleUrls: ['./access-point.component.css']
})
export class AccessPointComponent implements OnInit {


  constructor(private loginSvc: LoginService) {
   }

  ngOnInit(): void {

    //this.loginSvc.signIn("");
  }

}
