import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent implements OnInit {
  taskService: TaskService = inject(TaskService);

  tasks: string[] = ['task 1', 'task 2', 'task 3'];

  ngOnInit(){
    this.taskService.CreateTask.subscribe({
      next: (value: string) => {
        this.tasks.push(value)
      }
    });
  }
}
