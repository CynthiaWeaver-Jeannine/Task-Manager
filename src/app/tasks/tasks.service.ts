import { Injectable } from '@angular/core';
import { NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
 private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'MasterAngular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-2-28',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build Prototype App',
      summary:
        'Build prototype app, publish it, add to portfolio, and share with community.',
      dueDate: '2025-1-15',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare ad describe an issue template which will help with project managment.',
      dueDate: '2025-3-15',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Build portfolio website',
      summary:
        'Plan, design, and build a portfolio website to showcase work and projects.',
      dueDate: '2025-3-31',
    },
  ];
  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);

  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
