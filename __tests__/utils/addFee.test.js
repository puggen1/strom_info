import addFee from "../../utils/calculations/addFee";
import { extraCost } from "../../utils/constants";
let testContent = [
    {newPrice:0.883}
]
test("checks if fee is correctly added", ()=>{
    let result = addFee(testContent)
    expect(result[0].newPrice).toBe(testContent[0].newPrice + extraCost)
})