import { client } from "../sanity"
const useGetData = ()=>{
    const getAllDocuments = async () =>{
        const allArticles = await client.fetch('*[_type == "Article"]{ title,"mainImage": mainImage.asset->url, "id":_id}')
        return allArticles
    }
    const getSingleDocument = async (id)=>{
        const singleArticle = await client.fetch(`*[_type == "Article" && _id == "${id}"]{ title,"mainImage": mainImage.asset->url, "id":_id, ingress, "sections":section}`)
        return singleArticle
        }
    return {getAllDocuments, getSingleDocument}
}

export default useGetData