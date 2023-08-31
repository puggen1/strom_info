import { extraCost } from "../constants"

const addFee = (data)=>{
    return data.map((hour)=>{
        if(hour.newPrice){
            hour.newPrice += extraCost;
        }
        hour.NOK_per_kWh += extraCost
        return hour
    })
}


export default addFee