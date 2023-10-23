import { client } from "../sanity"
const useGetData = ()=>{
    const getAllDocuments = async () =>{
        const allArticles = await client.fetch('*[_type == "Article"]{ title,"mainImage": mainImage.asset->url, "id":_id}')
        return allArticles
    }
    const getSingleDocument = async (id)=>{
        const singleArticle = await client.fetch(`*[_type == "Article" && _id == "${id}"]{ title,"mainImage": mainImage.asset->url, "id":_id, ingress, "sectionOne":section[]{
            ...,
            _type == "image" =>{"imageUrl": asset->url}},
            "sectionTwo":sectionTwo[]{
                ...,
                _type == "image" =>{"imageUrl": asset->url}}
    }`)
    console.log(singleArticle)
        return singleArticle
        }
    return {getAllDocuments, getSingleDocument}
}

export default useGetData