const qs = require('qs')
const axios = require('axios')
const https = require('https')
const { encode, decode } = require('../encode-decode/index.js')


let instance = ''

const setInstanceForCA = (token) => {
    instance =
        axios.create({
            timeout: 100000,
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        })
}

const encryptCA = async (token, pdfb64) => {
    let pdfb64ca = ''
    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    try {
        const response = await
            axios
                .post('https://10.200.51.52/MTL_PdfSignature/api/v1/Signature/Sign', { "OrientationType": "1", "Base64Pdf": pdfb64 }, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                })
                .then(response => {
                    pdfb64ca = response.data.Base64Pdf
                    console.log(pdfb64ca)

                })
    }
    catch (error) {
        console.log(error)
    }
    return pdfb64ca
}

const runCA = async (token, pdfb64) => {
    console.log('token is ' + token)
    console.log(pdfb64)
    await setInstanceForCA(token)
    const pdfb64ca = await encryptCA(token, pdfb64)
    await decode(pdfb64ca)
    return pdfb64ca
}
module.exports = { runCA }
