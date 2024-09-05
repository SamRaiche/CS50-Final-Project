import { Body, Controller, Get, Logger, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { TodoDto } from './todo.dto';
import { TodoList } from './todolist.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

  constructor(private readonly todoService: TodoService) { }

  @Get()
  getAll(@Req() request: Request): TodoList[] {
    return this.todoService.findall()
  }

  @Post()
  async create(@Body() todo: TodoDto) {
    Logger.log(`creating dto`);
    Logger.log(todo);
  }

  @Put()
  put(): string {
    return 'update todo";';
  }
}
