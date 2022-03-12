export function problem(inventory){
    inventory.sort((a,b)=>{
        let fa=a.car_model,
            fb=b.car_model;

        if(fa<fb){
            return -1;
        }
        if(fa>fb){
            return 1;
        }
        return 0;
    });
    return inventory.car;
}
