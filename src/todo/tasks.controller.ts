import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { TaskModel } from './task.model';
import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.findAllTasks();
  }

  @Get(':taskId')
  getTaskById(@Param('taskId') id: number) {
    const task = this.taskService.findTaskById(id);
    if (!task) {
      throw new NotFoundException('Task with Id ${id}not found');
    }
    return task;
  }

  @Post('create')
  //adding a task
  createTask(@Body() task: TaskModel) {
    return this.taskService.createTask(task);
  }
}
