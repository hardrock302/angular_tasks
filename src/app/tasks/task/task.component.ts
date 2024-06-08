import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { type Task } from './task.model'
import { NewTaskComponent } from '../new-task/new-task.component';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common'
import { TasksService } from './task.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NewTaskComponent, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  //use exclamation point when you want to tell Angular to ignore that if may not have a value
  // use ? to make it use undefined as a null value
  @Input({required: true}) task!: Task


  private taskService = inject(TasksService)
  onCompleteTask(){
    this.taskService.removeTask(this.task.id)
  }
}


