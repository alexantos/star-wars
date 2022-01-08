import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Person} from '../people/people.component';
import { PeopledetailService } from './peopledetail.service';

@Component({
  selector: 'app-peopledetail',
  templateUrl: './peopledetail.component.html',
  styleUrls: ['./peopledetail.component.css']
})
export class PeopledetailComponent implements OnInit {

  people: Person = {}

  constructor(private activatedRoute: ActivatedRoute, private peopleDService: PeopledetailService) {
    this.activatedRoute.queryParams.subscribe((value: any) => {
      console.log(value.url)
      this.peopleDService.getPeople(value.url).subscribe((result)=> {
        console.log(result);
        this.people = result;
      })
    })
  }

  ngOnInit(): void {
  }

}
