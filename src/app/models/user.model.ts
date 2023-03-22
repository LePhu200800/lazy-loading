export class UserModel {
    id: number;
    name: string;
    gender: string;
    birthday: string;
    phone: string;
    
    constructor(id: number, name: string, gender: string, birthday: string, phone: string) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.phone = phone;
     }
}