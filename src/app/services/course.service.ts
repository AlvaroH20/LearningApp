import { Injectable } from '@angular/core';
import { learningData } from '../data/learning';
import { Course } from '../model/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private course:Course=learningData;
  constructor() { }

  getCourse():Course{
    return this.course;
  }
}
