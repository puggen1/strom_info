import { useState } from "react"
import getCollection from "../functions/databaseFunctions/getCollection"
import app from "../firebase/firebaseConfig"
import { getFirestore } from "firebase/firestore"
import getDocument from "../functions/databaseFunctions/getDocument"
const useGetData = (collectionName)=>{
    const [currentCollection, setCurrentCollection] = useState(collectionName)

    const database = getFirestore(app)
    const getAllDocuments = async () =>{
        const allArticles = []
        const test = await getCollection(currentCollection,database).then((data)=>{
            data.forEach((doc)=>{
                allArticles.push({id:doc.id, ...doc.data()})
            })
            return allArticles
        })
        return test
    }
    const getSingleDocument = async (id)=>{
        const response = await getDocument(collectionName, database, id)
        return response
    }
    return {getAllDocuments, getSingleDocument}
}

export default useGetData