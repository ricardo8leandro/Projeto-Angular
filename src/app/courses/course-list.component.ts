import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector:'app-course-list',
  templateUrl: './course-list-component.html'
})

export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void {
      this.courses = [
        {
          id: 1,
          name: 'Angular: Forms',
          imageUrl: '',
          price: 99.99,
          code: 'XPS',
          duration: 120,
          rating: 5.5,
          releaseDate: 'December, 2, 2019'
        },
        {
          id: 2,
          name: 'React: Hooks',
          imageUrl: '',
          price: 19.00,
          code: 'RCT',
          duration: 60,
          rating: 3.2,
          releaseDate: 'May, 20, 2020'
        }
      ]
  }

}
