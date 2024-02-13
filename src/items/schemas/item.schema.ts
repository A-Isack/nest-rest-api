import { Schema, model } from "mongoose";

export const ItemSchema: Schema = new Schema({
        name: String,
        description: String,
        qty: Number,
})

export const Item = model('Item', ItemSchema)