import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-modal-intro',
  templateUrl: './modal-intro.component.html',
  styleUrls: ['./modal-intro.component.css']
})

export class ModalIntroComponent implements OnInit {

  constructor(public router: Router, public dialog: MdDialog) { }

  ngOnInit() {
  }
  NextPage(){
    this.router.navigateByUrl('/login');
    this.dialog.closeAll();
  }
}

