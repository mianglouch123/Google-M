type status  = "pending" | "failed" | "success"


 interface ItemsReponseSearchImage {
        title : string,
        thumbnailImageUrl : string,
        originalImageUrl : string ,
        contextLink : string ,
        height : number ,
        width : number ,
        size : string
    
}
export interface ApiResponseSearchImage {
    status : status
    items : ItemsReponseSearchImage[]
}