import { Module } from '@nestjs/common';
import { TodoListService } from './todolist.service';
import { TodoListController } from './todolist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoList } from './entities/todolist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo, TodoList])],
  providers: [TodoListService],
  controllers: [TodoListController],
})
export class TodoListModule { }
