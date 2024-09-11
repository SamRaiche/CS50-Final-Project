import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Todo } from './entities/todo.entity';
import { TodoList } from './entities/todolist.entity';

@Injectable()
export class TodoListService {

    constructor(
        @InjectRepository(TodoList)
        private todoListRepository: Repository<TodoList>,

        @InjectRepository(Todo)
        private todoRepository: Repository<Todo>,
    ) { }

    //
    // todolist
    //
    async createTodoList(todoList: TodoList): Promise<TodoList> {
        let newLists = await this.todoListRepository.save([todoList]);
        return newLists[0];
    }

    async findAllTodoLists(): Promise<TodoList[]> {
        return this.todoListRepository.find({ relations: ["todos"] });
    }

    async findOneTodoList(id: number): Promise<TodoList> {
        return this.todoListRepository.findOne({ where: { id: id }, relations: ["todos"] });
    }
    async findOneTodoListOrFail(id: number): Promise<TodoList> {
        const todoList = await this.findOneTodoList(id);
        if (!todoList) {
            throw new Error(`TodoList not found for id ${id}`);
        }
        return todoList;
    }

    async deleteTodoList(id: number): Promise<void> {
        await this.todoListRepository.delete(id);
    }

    //
    // todo
    //
    async createTodo(todoListId: number, todo: Omit<Todo, "id" | "todoList">): Promise<Omit<Todo, "todoList">> {
        const todoList = await this.findOneTodoListOrFail(todoListId);
        const newTodo = this.todoRepository.create({ ...todo, todoList: todoList });
        const savedTodo = await this.todoRepository.save(newTodo);
        delete savedTodo.todoList;
        return savedTodo;
    }

    async updateTodo(todoListId: number, id: number, updatedTodo: Partial<Todo>): Promise<Todo> {
        const todoList = await this.findOneTodoListOrFail(todoListId);
        await this.todoRepository.update(id, updatedTodo);
        return this.todoRepository.findOne({ where: { id } });
    }
}
