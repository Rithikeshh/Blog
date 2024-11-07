import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-usermodal',
  templateUrl: './usermodal.component.html',
  styleUrls: ['./usermodal.component.scss'],
})
export class UsermodalComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}
  // preventCloseModal(e: Event) {
  //   e.stopPropagation();
  // }
  handleUserModal() {
    this.commonService.handleUserModal(false);
  }
}
