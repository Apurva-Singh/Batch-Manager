
import { User } from './User';
import { Entity } from './Entitiy';

export interface Group extends Entity{
        
        name: string,
        is_private: boolean,
        group_image_url:  string,
        description: string,
        creator: User,
        created_at: Date,
  

}