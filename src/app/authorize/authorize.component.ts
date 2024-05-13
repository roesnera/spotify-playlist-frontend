import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-authorize',
  standalone: true,
  imports: [],
  templateUrl: './authorize.component.html',
  styleUrl: './authorize.component.scss'
})
export class AuthorizeComponent {

  constructor(private router: Router, private apiClient: ApiClientService) { }

  authorize(): void {
    this.apiClient.authorize().subscribe((responsePage) => {
      console.log(responsePage)
      this.router.navigate([responsePage])
    })
  }

}
