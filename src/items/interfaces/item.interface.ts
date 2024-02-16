import { ObjectId } from "mongoose";

export interface Iitem {
    id?: ObjectId;
    name?: string;
    description?: string;
    quantity?: number;
}
