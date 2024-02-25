import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { patcheUserDto } from './dto/patchUserDto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService : UsersService){}

    @Get()
    getAllUsers(){
        return this.userService.findAll()
    }

    @Get('email')
    async getByEmail(@Query('email') email: string){
        return this.userService.findByEmail(email)
    }

    @Post()
    async createNewUser(@Body() body: createUserDto){
        return this.userService.addUser(body)
    }

    @Patch()
    updateUser(@Body() body: patcheUserDto){
        return this.userService.patchUser(body)
    }

}
