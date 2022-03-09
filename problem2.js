export function problem(inventory){
    let lastcar=inventory[inventory.length-1]; 
    let lastCar=inventory.length-1;
    return (`Last car is a ${inventory[lastCar].car_make} ${inventory[lastCar].car_model}`);
}