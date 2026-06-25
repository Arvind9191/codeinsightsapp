export const enviroment ={    
   baseapiurl:'https://codeinsights.runasp.net/api/',
    //baseapiurl:"https://localhost:7045/api/"
    appurl:"thecodeinsights.vercel.app"
}

export const Endpoint={
    signup:'auth/registration',
    login:'auth/login',
    verifyemail:"auth/verifyemail",
    fileupload:'files/upload',
    download:'files/download/{filename}',
    projectlist:'api/project',
    getprojectbyid:'project/{projectid}',
    updateproject:"project{projectid}",
    deleteproject:"project/{projectid}"
}

