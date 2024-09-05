import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TodoList } from './todolist.dto';

@Entity()
export class TodoDto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({ default: false })
    completed: boolean

    // TODO: default to current unix_ts (sqlite default / timestamp?)
    @Column()
    created_at: number
    @Column()
    updated_at: number

    @ManyToOne(() => TodoList, (todoList) => todoList.todos, { onDelete: "CASCADE" })
    todoList: TodoList;
}
