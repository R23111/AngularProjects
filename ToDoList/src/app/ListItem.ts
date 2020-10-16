export class ListItem {
  taskText: string;
  taskDone: boolean;

  constructor(text: string, done: boolean = false) {
    this.taskText = text;
    this.taskDone = done;
  }

  get text(): string {
    return this.taskText;
  }
}
