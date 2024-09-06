import { Body, Controller, Delete, Get, Logger, Param, Post } from '@nestjs/common';
import { Request } from 'express';
import { Todo } from './entities/todo.entity';
import { TodoList } from './entities/todolist.entity';
import { TodoListService } from './todolist.service';

@Controller('todolist')
export class TodoListController {

  constructor(private readonly todoService: TodoListService) { }

  @Get()
  async findAllTodoLists(): Promise<TodoList[]> {
    return this.todoService.findAllTodoLists();
  }


  @Post()
  async create(@Body() todoList: TodoList) {
    return this.todoService.createTodoList(todoList);
  }

  @Post(":id")
  async createTodo(@Param("id") id: number, @Body() todo: Todo) {
    return this.todoService.createTodo(id, todo);
  }

  // While we *could* update with just the todoId, we'll require the todo item
  // being updated to be a part of the list to keep the URL consistent
  //
  // /todolist/listId/todoId

  @Post(":id/:todoId")
  async completeTodo(@Param("id") id: number, @Param("todoId") todoId: number): Promise<Todo> {
    return this.todoService.updateTodo(id, todoId, { completed: true });
  }
}
