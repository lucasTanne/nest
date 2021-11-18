import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { IUserService } from './iuser.service';

@Injectable()
export class UserMockService implements IUserService{
    private users: Array<User> = [{
        id: 1,
        fullName: "Lucas",
        birthday: "31/07/1999",
        isActive: true,
        password: "lulu"
    },{
        id: 2,
        fullName: "Alan",
        birthday: "20/10/1999",
        isActive: false,
        password: "aj"
    }]

    findAll(): Promise<User[]> {
        return Promise.resolve(this.users)
    }
    getUser(id: number): Promise<User> {
        let user = this.users.find((user: User) => {
            if(user.id == id){
                return user
            }
        })
        
        return Promise.resolve(user)
    }
    createUser(user: User) {
        this.users.push(user)
    }
    updateUser(user: User) {
        let u = this.users.find((userF: User) => {
            if(userF.id == user.id){
                return userF
            }
        })
        if(u){
            u.birthday = user.birthday
            u.fullName = user.fullName
            u.id = user.id
            u.isActive = user.isActive
            u.password = user.password
        }
    }
    deleteUser(id: number) {
        let user = this.users.find((user: User) => {
            if(user.id == id){
                return user
            }
        })
        if(user){
            this.users.splice(this.users.indexOf(user), 1)
        }
    }

}