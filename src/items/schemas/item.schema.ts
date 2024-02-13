import { Schema, model } from "mongoose";

export const ItemSchema: Schema = new Schema({
        name: String,
        description: String,
        quantity: Number,
})

export const Item = model('Item', ItemSchema)