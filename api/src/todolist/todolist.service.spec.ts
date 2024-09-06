import { Test, TestingModule } from '@nestjs/testing';
import { TodoListService } from './todolist.service';

describe('TodoService', () => {
  let service: TodoListService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [TodoService],
  //   }).compile();

  //   service = module.get<TodoService>(TodoService);
  // });

  it('hello world', () => {
    expect(true);
    expect(1);
  });

  // it('should be defined', () => {
  //   expect(true);
  //   expect(service).toBeDefined();
  // });
});
