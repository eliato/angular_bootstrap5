import { Component, OnInit, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';
import { DataService} from '../data.service';
import { Productos } from '../interfa/productos';
import { DataTableDirective } from "angular-datatables";
import {Observable,Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  // Datatables Properties
  dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    @ViewChild(DataTableDirective, { static: false })  dtElement: DataTableDirective;
  public produc:  Productos[] = [];
  produc$: Observable<Productos[]>;

  constructor(private dataService: DataService,private chRef: ChangeDetectorRef) {

    this.produc$ = this.dataService.sendGetRequest(); this.produc$.subscribe( (datos) => {
      console.log(datos);
      this.produc = datos;
      this.chRef.detectChanges();
      this.dtTrigger.next();
    })
   }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      responsive: false,
      paging:true,
      info: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json',
      },
    };

  }



}

