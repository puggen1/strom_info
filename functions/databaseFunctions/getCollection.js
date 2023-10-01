import { collection,getDocs } from "firebase/firestore";

const getCollection = async (collectionName, database)=>{
     let result = await getDocs(collection(database, collectionName))
     return result
}
export default getCollection