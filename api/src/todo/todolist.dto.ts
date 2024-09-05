import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TodoDto } from "./todo.dto";

@Entity()
export class TodoList {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => TodoDto, (todo) => todo.todoList, { cascade: true })
    todos: TodoDto[]
}