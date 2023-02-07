import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task>=new EventEmitter();
  faTimes = faTimes;
  onDelete(task:Task){
    this.onDeleteTask.emit(task);
  }
  onToggle(task:Task){
    this.onToggleReminder.emit(task)
  }
}
