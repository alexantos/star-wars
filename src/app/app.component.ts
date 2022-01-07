import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';

interface Person {
  name?: string;
  birth_year?: string;
  gender?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns: string[] = ['name', 'birth', 'gender'];

  datasource: MatTableDataSource<Person>

  result: any;

  constructor(private appService: AppService) {
    this.appService.getAll().subscribe((result) => {
      console.log(result)
      this.result = result
      this.datasource = new MatTableDataSource(result.results);
    });
  }

  nextPage() {
    this.appService.getPage(this.result.next).subscribe((result)=>{
      console.log(result);
      this.result = result
      this.datasource = new MatTableDataSource(result.results);
    });
  }

  previousPage(){
    this.appService.getPage(this.result.previous).subscribe((result)=>{
      console.log(result);
      this.result = result
      this.datasource = new MatTableDataSource(result.results);
    });
  }

}
