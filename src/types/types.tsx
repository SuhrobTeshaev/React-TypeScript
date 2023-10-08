export interface IAddress {
    street:string;
    city:string;
    zipcode:string;
}
export interface IUser {
    id:number;
    name:string;
    email:string;
    address:IAddress
}
export interface ITodo {
    id:number;
    title:string;
    complated:boolean
}
 
export interface IComment {
    id:number;
    name:string;
    body:string
}