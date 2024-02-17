import { Injectable, ConflictException, BadRequestException, NotFoundException } from '@nestjs/common';
import { Iitem } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { serviceResponse } from '../common/interfaces/responce.interfaces'

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly ItemModel: Model<Iitem>){}
    
    async findAll():Promise<Iitem[]>{
        return this.ItemModel.find().exec()
    }

    async findOne(id: ObjectId): Promise<Iitem>{
        return this.ItemModel.findById(id)
    }

    async create(item: Iitem): Promise<serviceResponse<Iitem>>{
        try {
            const newItem = await this.ItemModel.create(item)
            return {code: 200, data: newItem, message: 'new item created successfully'}
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException({msg: 'error creating new item, key already exist',error})
            }
            else{
                throw new BadRequestException({msg: 'unexpected error while creating new item', error})
            }
        }
    }

    async put(id: ObjectId, reqData: Iitem): Promise<serviceResponse<Iitem>>{
        try {
            const updatedItem = await this.ItemModel.findByIdAndUpdate(id, reqData, {new: true})
            if(updatedItem){
                return {code: 200, data: updatedItem, message: 'new Updated created successfully'}
            }
            else{
             throw new  NotFoundException({msg: 'Item not found'}) 
            }
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException({msg: 'error updating item, key already exist',error}) 
            }
            else{
                throw new BadRequestException({msg: 'unexpected error while updating item', error})
            }
        }
    }
    
    async patch(id: ObjectId, data: Iitem): Promise<serviceResponse<Iitem>>{
        try {
            const patchedItem = await this.ItemModel.findByIdAndUpdate(id, data, {new: true})
            if(patchedItem){
                return {code: 200, data: patchedItem, message: 'Item Updated created successfully'}
            }
            else{
                throw new  NotFoundException({msg: 'Item not found'}) 
            }
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException({msg: 'error patching item, key already exist',error})
            }
            else{
                throw new BadRequestException({msg: 'unexpected error while patching item', error})   
            }
        }
    }
    
    async delete(id: ObjectId): Promise<serviceResponse<Iitem>>{
        try {
            const ItemToDelete = await this.ItemModel.findByIdAndDelete(id)
            if(ItemToDelete){
                return {code: 200, data: ItemToDelete, message: 'item deleted successfully'}
            }
            else{
                throw new  NotFoundException({msg: 'Item not found'}) 
            }
        } catch (error) {
                throw new BadRequestException({msg: 'unexpected error while deleting item', error})   
        }
    }
}
