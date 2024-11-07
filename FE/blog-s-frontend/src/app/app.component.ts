import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-s-frontend';
  showNavbar = true;
  showUserModal: boolean = false;
  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private router: Router
  ) {
    this.fetchBlog();
    this.commonService.showUserModal.subscribe((val) => {
      this.showUserModal = val;
    });
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === '/login' || event.url === '/signup') {
          this.showNavbar = false;
        } else {
          this.showNavbar = true;
        }
      });
  }
  fetchBlog() {
    this.http
      .get<any>('http://localhost:5000/api/blog/all')
      .subscribe((res) => {
        console.log('response', res);
      });
  }
}
