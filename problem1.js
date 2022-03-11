export function dataById(inventory,id){
    if(!id || !inventory){
        return 0;
    }
    return `"Car ${id} is a ${inventory[id-1].car_year} ${inventory[id-1].car_make} ${inventory[id-1].car_model}`;
    
}
