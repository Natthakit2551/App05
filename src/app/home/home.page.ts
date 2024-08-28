import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private details : NavController) {}
  item=[
    {
      id:1,
      Name:'product A' ,
      price : '200',
      detail: 'this is a product A',
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WfjYEh0hyIW8Q3834PjSiT-vdOkEnOy99g&s',
    },
    {
      id:2,
      Name:'product B' ,
       price : '250',
      detail: 'this is a product B' ,
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHF5m_uswGtS8qpr13lzE4kJweXGbepX9EoA&s',
    },
    {
      id:3,
      Name:'product C' ,
      price : '300',
      detail: 'this is a product C' ,
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwAirk1HW0E4NrkKThwwC9Zm4chu6EhTQAXQ&s',
    },
    {
      id:4,
      Name:'product D' ,
      price : '350',
      detail: 'this is a product D' ,
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8aUgi5u8uZNyFTd54Rbzs4rVWOI_VfIea5w&s',
    },

  ]
  detail(i:any){
    this.details.navigateForward('/detail',
      {state :{i}})

  }



}
