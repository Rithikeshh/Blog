import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  focus: boolean = false;
  searchValue: string = '';
  ngOnInit(): void {}
  handleFocuse() {
    this.focus = true;
  }
  handleBlur() {
    this.focus = false;
  }
  handleUserModal() {
    this.commonService.handleUserModal(true);
  }
}
