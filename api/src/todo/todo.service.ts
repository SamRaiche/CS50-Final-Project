import { Injectable } from '@nestjs/common';
import { TodoList } from './todolist.dto';

@Injectable()
export class TodoService {

    private now_seconds(): number {
        // Date.now() returns milliseconds from midnight, Jan 1 1970, UTC
        return Math.floor(Date.now() / 1000);
    }

    async findall(): Promise<TodoList[]> {
        const ts = this.now_seconds();
        const tl: TodoList[] = [];

        return [{
            name: "l1",
            todos: [
                {
                    id: 1,
                    title: "one",
                    completed: false,
                    created_at: ts,
                    updated_at: ts
                },
            ]
        },
        ];
    }

}
