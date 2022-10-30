import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
  findTaskById(id: number) {
    return this._tasks.find((task) => task.id === id);
  }
  _tasks: TaskModel[] = [
    { id: 1, description: 'Find a kitten' },
    { id: 2, description: 'Wash the kitten' },
    { id: 3, description: 'Feed the kitten' },
  ];

  findAllTasks(): TaskModel[] {
    return this._tasks;
  }

  //create a task
  async createTask(task: TaskModel): Promise<TaskModel[]> {
    //append the task to _tasks array
    this._tasks.push(task);
    return this._tasks;
  }
}
