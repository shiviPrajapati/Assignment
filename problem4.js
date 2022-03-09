export function problem(inventory){
    let carYear=[];
    for(let i=0;i<inventory.length;i++){
        carYear[i]=inventory[i].car_year;
    }
    carYear.sort();
    return carYear;
}