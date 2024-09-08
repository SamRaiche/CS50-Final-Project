import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TodoList } from './todolist.entity';

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ default: false })
    completed: boolean


    @ManyToOne(() => TodoList, (todoList) => todoList.todos, { onDelete: "CASCADE" })
    todoList: TodoList;
}
