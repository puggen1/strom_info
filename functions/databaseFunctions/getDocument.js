import { doc, getDoc } from "firebase/firestore";
const getDocument = async (collection, dataBase,id)=>{
    try{
       const docSnap = await getDoc(doc(dataBase, collection, id))
       if(docSnap.exists()){
        return docSnap.data()
       }
       else{
        console.log("no document with that id")
        return {}
       }
    }
    catch(error){
        console.log(error)
        return error
    }
}

export default getDocument