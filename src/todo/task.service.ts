import { Injectable } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
  findTaskById(id: number) {
      throw new Error('Method not implemented.');
  }
  _tasks: TaskModel[] = [
    { id: 1, description: 'Find a kitten' },
    { id: 2, description: 'Wash the kitten' },
    { id: 3, description: 'Feed the kitten' },
  ];

  findAllTasks(): TaskModel[] {
    return this._tasks;
  }
}
