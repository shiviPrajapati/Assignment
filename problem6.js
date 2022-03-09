export function problem(inventory,type1,type2){
    let BmwAndAudi=[];
    let k=0;
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_make === type1 || inventory[i].car_make === type2){
            BmwAndAudi[k++]=inventory[i];
        }
    }
    
    return BmwAndAudi;
}