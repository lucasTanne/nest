import { User } from "../entity/user.entity";

export interface IUserService{
    findAll(): Promise<User[]>;
    getUser(id: number): Promise<User>;
    createUser(user: User);
    updateUser(user: User);
    deleteUser(id: number);
}