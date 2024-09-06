import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoListModule } from './todolist/todolist.module';
import { Todo } from './todolist/entities/todo.entity';
import { TodoList } from './todolist/entities/todolist.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "todo.sqlite",
      entities: [Todo, TodoList],
      //
      // Automatically generates the DB schema. In production, we would use DB
      // migrations as described here:
      //
      // https://orkhan.gitbook.io/typeorm/docs/migrations
      //
      synchronize: true,
    }),
    TodoListModule],
})
export class AppModule { }
