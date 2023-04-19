import { data } from "../data/data";

export const pedirProd=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
            reject();
        },2000)
    })
}