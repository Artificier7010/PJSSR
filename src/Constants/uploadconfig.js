// API_NOTIFICATION_MESSAGES

export const UPLOAD_API_NOTIFICATION_MESSAGES={
    loading:{
        title:"Loading.....",
        message:'Data is Being Loaded, Please Wait'
    },
    success:{
        title:'Success',
        message:'Data is Successfuly Loaded'
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fetching response from the server,please try again'
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while Parsing requested Data'
    },
    networkError:{
        title:'Error',
        message:'Unable to connect to the server right now'
    }
}


// API SERVICE CALL
// SAMPLE REQUEST
// NEED SERVICE CALL: {url:'/',method:'POST/GET/UPDATE/DELETE',params:true/false,query:true/false}
export const UPLOAD_SERVICE_URLS={
    uploadImage:{url:"/file/upload",method:'POST'},
}