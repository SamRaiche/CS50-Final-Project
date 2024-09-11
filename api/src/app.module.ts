import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TodoListModule } from './todolist/todolist.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //
      // the database engine
      //
      type: "sqlite",
      //
      // `database` is a sqlite specific database option
      //
      database: "todo.sqlite",

      //
      // entities or entity schemas to be loaded. accepts entity classes, entity
      // schema classes, and directory paths to load from. Directories support
      // glob patterns.
      //
      // example:
      // entities: [Todo, TodoList, "todolist/entities/*.js"]

      entities: ["**/entities/*.js"],
      //
      // Automatically generates the DB schema. In production, we would use DB
      // migrations as described here:
      //
      // https://orkhan.gitbook.io/typeorm/docs/migrations
      //
      synchronize: true,

      logging: ["query", "error"],
      //
      // Log all queries which run more than 1 second.
      //
      // NOTE: this does *not* kill long running queries, only log them.
      //
      maxQueryExecutionTime: 1000,
    }),
    TodoListModule],
})
export class AppModule { }
