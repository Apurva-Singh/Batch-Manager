
import { Entity } from './Entitiy';
 
export interface User extends Entity{
    
    first_name: string,
    middle_name: string,
    last_name: string,
    email: string,
    role: 'staff' | 'admin',
    profile_pic_url: string,
    phone_number: number,
    gender: 'male' | 'female' | undefined,
    birth_date: number,
    birth_month: number,
    birth_year: number,
    alternate_phone_number: number,
    education: string,
    hometown: string,
}