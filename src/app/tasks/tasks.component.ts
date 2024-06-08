import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './task/task.service';

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isAddingTask = false;

  // adding an access specifier after a parameter in a constructor creates an instance
  // as long as @Injectable({providedIn: 'root'}) is used in the service
  constructor(private tasksService: TasksService){

  }
  onCloseAddTask() {
    this.isAddingTask = false
  }

  onStartAddTask(){
    this.isAddingTask = true
  }
  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId)
  }

  onAddTask(newTaskData: NewTask){
    console.log(newTaskData)
    this.isAddingTask = false
  }

}