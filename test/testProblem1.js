import {dataById} from "../problem1.js";
import {inventory} from "../invent.js";
function getData(inventory,id){
    let result=dataById(inventory,id);
    if(result===0){
        console.log("wrong entry");
    }
    else{
        console.log(result);
    }
}
  
getData(inventory,33);

getData(inventory,null);

getData(33);

getData(inventory,11);
