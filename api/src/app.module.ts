import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoList } from './todo/todolist.dto';
import { TodoDto } from './todo/todo.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "todo.sqlite",
    })
    TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
