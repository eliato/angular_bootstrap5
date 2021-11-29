import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Productos } from '../interfa/productos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public produc:  Productos[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.sendGetRequest().subscribe( datos => {
      console.log(datos);
      this.produc = datos;
    })
  }

}

