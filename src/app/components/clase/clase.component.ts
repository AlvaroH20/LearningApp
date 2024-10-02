import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'clase',
  standalone: true,
  imports: [],
  templateUrl: './clase.component.html',
})
export class ClaseComponent {
  @Input()clase!:Course
}
