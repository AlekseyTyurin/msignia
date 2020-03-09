import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from "../../services/data.service";


export interface Food {
  id: number;
  name: string;
  description: string;
  picture_file_name: string;
}
let ELEMENT_DATA;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'buy'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getProducts().subscribe((data) => {
      ELEMENT_DATA = data;
      this.dataSource= new MatTableDataSource<Food>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }


}

