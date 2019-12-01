import { Injectable, Param } from '@nestjs/common';
import { CreateToDoDto } from './dtos/create-toDo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from './interfaces/toDo.interface';
import { Model} from 'mongoose';

@Injectable()
export class TodoService {
    constructor (@InjectModel('ToDo') private toDoModel: Model<ToDo>){
        
    }

    async createToDoItem(createToDoItemDto: CreateToDoDto): Promise<{}> {
        const newTodo = this.toDoModel(createToDoItemDto);
        const result = await newTodo.save();
        return result.id;

    }

    async getToDos () {
        const result = await this.toDoModel.find();
        return result as ToDo[];
    }

    async getSingleToDo (ToDoId: string) {
        const result = await this.findToDo(ToDoId);
        return result;
    }

    private async findToDo(id: string): Promise<ToDo> {
        const todo = await this.toDoModel.findById(id);
        return todo;
    }

    async deleteToDo (id: string){
        await this.toDoModel.deleteOne({id: id}).exec();
    }
    

}
