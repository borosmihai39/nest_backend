import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CreateToDoDto } from './dtos/create-toDo.dto';
import { TodoService } from './todo.service';
import { request } from 'http';

@Controller('todo')
export class TodoController {
    constructor(private readonly toDoService: TodoService){

    }
    
    @Post()
    create(@Body() CreateToDoDto: CreateToDoDto){
        return this.toDoService.createToDoItem(CreateToDoDto);
    }

    @Get()
    async getAllToDos(){
        const todo = await this.toDoService.getToDos();
        return todo;
    }

    @Get(':id')
    getToDo (@Param('id') ToDoId: string) {
        return this.toDoService.getSingleToDo(ToDoId);
    }
    
    @Delete(':id')
    async removeToDo (@Param('id') id: string) {
        await this.toDoService.deleteToDo(id)
        return null;
    }
    

    
}
