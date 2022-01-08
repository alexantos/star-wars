import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PeopleService } from './people.service';

export interface Person {
  name?: string;
  birth_year?: string;
  gender?: string;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

  displayedColumns: string[] = ['name', 'birth', 'gender'];

  datasource: MatTableDataSource<Person>

  result: any;

  constructor(private peopleService: PeopleService, private route: Router) {
    this.peopleService.getAll().subscribe((result) => {
      console.log(result)
      this.result = result
      this.datasource = new MatTableDataSource(result.results);
    });
  }

  ngOnInit(): void {
  }

  nextPage() {
    this.peopleService.getPage(this.result.next).subscribe((result) => {
      console.log(result);
      this.result = result
      this.datasource = new MatTableDataSource(result.results);
    });
  }

  previousPage() {
    this.peopleService.getPage(this.result.previous).subscribe((result) => {
      console.log(result);
      this.result = result
      this.datasource = new MatTableDataSource(result.results);
    });
  }

  selectPeople(people: any) {
    this.route.navigate(['peopledetail'], { queryParams: { url: people.url } })
  }

}
