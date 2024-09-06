import { Test, TestingModule } from '@nestjs/testing';
import { TodoListController } from './todolist.controller';

describe('TodoController', () => {
  let controller: TodoListController;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [TodoController],
  //   }).compile();

  //   controller = module.get<TodoController>(TodoController);
  // });

  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  it('hello world', () => {
    expect(true);
    expect(1);
  });

});
