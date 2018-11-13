import { Component, OnInit } from '@angular/core';
import { LessonInstance } from '../lesson-instance';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  lessons: LessonInstance[];

  onRemove(index: number) {
    this.lessons.splice(index, 1);
    this.saveLocal();
  }

  addLesson() {
    this.lessons.push({
      topic: '',
      date: new Date().toISOString().substr(0, 10),
      lecturer: '',
    });
    this.saveLocal();
  }

  getLessons() {
    this.lessons = this.LessonsService.getLessons();
  }

  onSave(item) {
    this.lessons[item.index] = item.newValue;
    this.saveLocal();
  }

  saveLocal() {
    this.LessonsService.setLessons(this.lessons);
  }

  constructor(private LessonsService: LessonService) { }

  ngOnInit() {
    this.getLessons();
  }
}
