export function problem(inventory,num){
    if(num<51 && num>0)
    return `"Car ${num} is a ${inventory[num-1].car_year} ${inventory[num-1].car_make} ${inventory[num-1].car_model}`;
}