import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Iuser } from './interfaces/user.interface';
import { serviceResponse } from '../common/interfaces/response.interfaces'

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly UserModel: Model<Iuser>){}

    async findAll(){
        return await this.UserModel.find({})
    }

    async findByEmail(email: string){

        email=email.toLocaleLowerCase()
        const foundUser = await this.UserModel.findOne({email})
        if (foundUser){
            return foundUser
        }
        else{
            return `User with email ${email} does not exist`
        }
    }

    async addUser(userData: Iuser):  Promise<serviceResponse<Iuser>>{
        try {
            if(userData.email){userData.email = userData.email.toLocaleLowerCase()}
            const createdUser = await this.UserModel.create(userData) 
            return {message: 'User created successfully', code: 201, data: createdUser}
        } catch (error) {
            if(error.code === 11000){
                throw new ConflictException({msg: 'error creating new item, key already exist',error})
            }
            else{
                throw new BadRequestException({msg: 'unexpected error while creating new item', error})
            }
        }
    }

    async patchUser(userData){
        try {
            const patchUser = await this.UserModel.findOneAndUpdate(userData.email) 
            return {message: 'User updated successfully', code: 201, data: patchUser}
        } catch (error) {
                throw new BadRequestException({msg: 'unexpected error while creating new item', error})
        }
    }
}
