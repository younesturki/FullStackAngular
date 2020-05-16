import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMessageFromService: string;
  name = '';
  errorMessage: string;

  constructor(private route: ActivatedRoute, 
              private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    //console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService()
        .subscribe(response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)   
    );
  }

  getWelcomeMessageWithPath() {
    this.welcomeDataService.executeHelloWorldServiceWithPath(this.name)
     .subscribe(response => this.handleSuccessfulResponse(response),
     error => this.handleErrorResponse(error) 
     );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error) {
    this.errorMessage = error.error.message;
  }
}
