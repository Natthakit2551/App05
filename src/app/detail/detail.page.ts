import { getTestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  item:any
  constructor(private route:Router) {

    const navigation = this.route.getCurrentNavigation();
  this.item = navigation?.extras?.state?.['i'];
  }



  ngOnInit() {
  }

}
