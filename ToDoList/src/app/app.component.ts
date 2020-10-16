import { Component } from '@angular/core';
import { ListItem } from './ListItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskList: ListItem[] = [];

  hideCompleted = true;

  inputText = '';

  onAdd(): void {
    if (this.inputText !== '') {
      this.taskList.push(new ListItem(this.inputText));
      this.inputText = '';
    }
  }

  changeShowState(): void {
    this.hideCompleted = this.hideCompleted ? false : true;
  }

  get Length(): number {
    let total = 0;

    this.taskList.forEach((element) => {
      if (!element.taskDone) {
        total++;
      }
    });

    return total;
  }
}
