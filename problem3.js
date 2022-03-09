export function problem(inventory){
    let carModal=[];
    for(let i=0;i<inventory.length;i++){
        carModal[i]=inventory[i].car_model;
    }
    carModal.sort();
    return carModal;
} 