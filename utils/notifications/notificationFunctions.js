import { updatedPrices } from "./updatedPrices"
const dailyPriceUpdate = ()=>{
    //this should return all the info needed to run the command
    const time = updatedPrices()
    let title="Prisene er oppdatert"
    let body="Sjekk morgendagens Strømpriser her"
    let dataContent={name:"dailyPriceUpdate", posistion:1}
    let trigger={ hour:time.getHours(), minute:time.getMinutes(), repeats:true}
    return {title, body, dataContent, trigger}
}


export {dailyPriceUpdate}