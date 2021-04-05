const qs = require('qs')
const axios = require('axios')
const https = require('https')
const { encode, decode } = require('../encode-decode/index.js')

let token = ''
let instance = ''
  
const setInstanceForToken = () => {
    instance =  axios.create({
        timeout: 100000,
        headers: {
            "Content-Type" : "application/x-www-form-urlencoded"
        },
        httpsAgent: new https.Agent({  
            rejectUnauthorized: false
         })
    })
}
           
const getToken = async () => { 
    let token = ''
    const agent = new https.Agent({  
        rejectUnauthorized: false
       });
    try {
    const response = await 
        axios
        .post('https://10.200.51.52/MTL_AuthenInternal/oauth2/token',qs.stringify({"username": "045687","grant_type": "password","client_id":"de6562733ab347b6998e6bbb06980fdd"}),{httpsAgent: agent})
        .then(response => {
            token = response.data.access_token
        })
        }
    catch (error)  {
        console.log(error)
    }
    return token
}


const getTokenCA = async() => {
    await setInstanceForToken()
    const token = await getToken()
    return token
}

module.exports = { getTokenCA }
