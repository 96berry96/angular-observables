import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask: string = '';
  taskService: TaskService = inject(TaskService);

  OnCreateTask(){
    this.taskService.OnCreateTask(this.newTask);
  }
}
