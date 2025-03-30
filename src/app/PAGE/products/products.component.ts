import { Component } from '@angular/core';
import { CardComponent } from "../../UI/card/card.component";
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-products',
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: any[]=[];
  constructor(private apiservice:ApiserviceService) { }

  ngOnInit()
  {
    this.apiservice.getproduct().subscribe((data:any)=>{
      this.products=data;
    })
  }

}
