import { Expose } from "class-transformer";
import { ObjectId } from "mongoose";

export class itemDto {
    @Expose()
    readonly _id: ObjectId
    @Expose()
    readonly name?: string;
    @Expose()
    readonly description?: string;
    // quantity is hidden 
    readonly quantity?: number; // this won't be shown if the serialize interceptor is called because of the expose tag
    @Expose()
    readonly quality? : string
}