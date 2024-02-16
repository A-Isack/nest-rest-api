import { Schema, model } from "mongoose";

export const ItemSchema: Schema = new Schema({
        name: {
                type: String,
                unique: {value: true, message: 'item name must be unique'}
         },
        description: String,
        quantity: Number,
        quality: String
})


// export const Item = model('Item', ItemSchema)