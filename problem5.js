import {carYear} from "../testProblem4.js";
export function problem(inventory){
    let oldCar=[];
    for(let i=0;i<carYear.length;i++){
        if(carYear[i]<2000){
            oldcar.push(carYear[i]);
        }
    }
    return oldCar;
}
