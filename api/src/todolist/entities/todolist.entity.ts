import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Todo } from "./todo.entity";

@Entity()
export class TodoList {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Todo, (todo) => todo.todoList, { cascade: true })
    todos: Todo[]
}