import { Component } from '@angular/core';
import { Student } from '../models/students';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {
  students: Student[] = [
    new Student(1, 'אורי', 'כהן', '050-1234567', 'ירושלים', 90, true),
    new Student(2, 'רות', 'לוי', '050-7654321', 'בני ברק', 85, true),
    new Student(3, 'דוד', 'מזרחי', '050-3333333', 'תל אביב', 70, false),
  ];

  onStudentClick(student: Student) {
    alert(`בחרת את ${student.firstName} ${student.lastName}`);
  }
}

