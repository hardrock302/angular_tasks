import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { type NewTask } from '../task/task.model'
import { TasksService } from '../task/task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string
  //use void type when you don't want to return anything
  @Output() closeAddTask = new EventEmitter<void>()
  @Output() createTask = new EventEmitter<NewTask>()
  enteredTitle = "";
  enteredSummary = "";
  enteredDate = "";
  private taskService = inject(TasksService)

  onCloseAddTask() {
    this.closeAddTask.emit()
  }

  onTaskCreate() {
    this.taskService.addTask({
      submittedTitle: this.enteredTitle,
      submittedSummary: this.enteredSummary,
      submittedDate: this.enteredDate
    }, 
    this.userId)
    this.closeAddTask.emit()
      // this.createTask.emit({
    //   submittedTitle: this.enteredTitle,
    //   submittedSummary: this.enteredSummary,
    //   submittedDate: this.enteredDate
    // })
  }
}
