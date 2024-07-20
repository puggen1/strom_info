const updatedPrices = ()=>{
    let timeForUpdatedPrices = new Date()
    timeForUpdatedPrices.setHours(14)
    timeForUpdatedPrices.setMinutes(30)
    return timeForUpdatedPrices
}

export {updatedPrices}