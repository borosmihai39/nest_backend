import * as mongoose from 'mongoose';
export const toDoSchema = new mongoose.Schema({
    id: String,
    checked: String,
    text: String,
})