import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [],
  templateUrl: './estudiantes.component.html',
})
export class EstudiantesComponent {
  @Input()estudiantes!:{ id: number, identification: number, name: string, surname: string }[]
}
