import { Component, OnInit, ChangeDetectorRef, ViewChild, OnDestroy } from '@angular/core';
import { DataService} from '../data.service';
import { Productos } from '../interfa/productos';
import { DataTableDirective } from "angular-datatables";
import {Observable,Subject } from 'rxjs';
import { Seiddes } from '../interfa/seiddes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  Usuarios:any = [];

  // Datatables Properties
  dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    @ViewChild(DataTableDirective, { static: false })  dtElement: DataTableDirective;
  public produc:  Productos[] = [];
  produc$: Observable<Productos[]>;
  public datos: Seiddes[];
  datos$: Observable<Seiddes[]>;
  unidad:any = [];

  constructor(private dataService: DataService,private chRef: ChangeDetectorRef) {  }


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
      lengthChange: true,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json',
      },
    };

    this.dataService.GetUsuarios().subscribe( (datos: any[]) => {
      //console.log(dat);

      this.Usuarios = datos;

      this.chRef.detectChanges();
      this.dtTrigger.next();
    })

  }



}

