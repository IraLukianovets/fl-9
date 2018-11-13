import { Injectable } from '@angular/core';
import { LessonInstance } from './lesson-instance';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor() { }

  getLessons(): LessonInstance[] {
    return JSON.parse(localStorage.getItem('lessons')) || [];
  }

  setLessons(lessons: LessonInstance[]) {
    localStorage.setItem('lessons', JSON.stringify(lessons));
  }
}
