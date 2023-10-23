import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
productName:string = "Test Data";
productImage:string = "assets/images/4.jpg";
prodImg2:string = "4.jpg";
productDescription:string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum illo facilis sint adipisci nihil voluptatem a molestiae sapiente iusto itaque, sit praesentium. Sunt necessitatibus iure omnis amet. Sapiente, alias est!";


}
