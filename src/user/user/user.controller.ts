import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { IUserService } from '../service/iuser.service';

@Controller('user')
export class UserController {

    constructor(@Inject('UserService') private readonly userService: IUserService) { }

    @Get('test')
    getTest(){
        return "user test marche nickel"
    }

    @Get(':id')
    get(@Param() params) {
        return this.userService.getUser(params.id);
    }

    @Get()
    async findAll() {
        return this.userService.findAll()
    }

    @Post()
    create(@Body() user: User) {
        return this.userService.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.userService.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.userService.deleteUser(params.id);
    }
}