import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  date: string = "";
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      (value => this.showAddTask = value)
    )
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.text) {
      alert("please add a task")
      return
    } else if (!this.date) {
      alert("please add a data & time")
      return
    }

    // Setup task as json
    const newTask = {
      text: this.text,
      date: this.date,
      reminder: this.reminder
    }

    // Emit event
    this.onAddTask.emit(newTask);

    // Clear out values after we submit
    this.text = "";
    this.date = "";
    this.reminder = false;
  }

}
