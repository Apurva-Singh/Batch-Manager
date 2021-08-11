
import { Entity } from './../models/Entitiy';


export interface EntityState<T extends Entity = Entity> {
    byId: {
        [id: number]: T;
    };
}

export const getIds = (entities: Entity[]) => {
    return entities.map((e) => e.id);
}

export const addOne = (state: EntityState, entity: Entity) => { 
        return {...state, byId: {...state.byId,  [entity.id]: entity} };
}

export const addMany = (state: EntityState , entities: Entity[]) => { // takes state and array, returns new state where in the byId of the state it will add the entity array 
    if(entities.length === 0){
        return state;
    }

     const entityMap = entities.reduce((prev, entity) => {  //normalising
           return {...prev, [entity.id]: entity};
           },{});

           return {
               ...state,
                byId: {...state.byId, ...entityMap},  
            };
    };




