import { Schema, model } from "mongoose";

export const UserSchema: Schema = new Schema({
        fullName: {
            type: String,
            unique: {value: true, message: 'item name must be unique'},
            message: 'Username must be unique'
         },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            required: true
        }
})