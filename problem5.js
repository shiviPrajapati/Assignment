export function problem(inventory){
    let oldCar=[];
    let k=0;
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_year<2000){
            oldCar[k++]=inventory[i].car_year;
        }
    }
    return oldCar;
}