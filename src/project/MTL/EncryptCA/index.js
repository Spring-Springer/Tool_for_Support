import React from 'react'
import './index.css';
import { getTokenCA } from "../ca-encrypt/caToken.js";
import { runCA } from "../ca-encrypt/caEncrypt.js"



const MtlPage = () => {
  const getFileForCA = async () => {
    var f = document.getElementById("EncCA").files;
    const token = await getTokenCA()
  
    var reader = new FileReader();
    reader.readAsDataURL(f[0]);
    reader.onload = function () {
      let pdfb64 = reader.result.toString()
      pdfb64 = pdfb64.replace('data:application/pdf;base64,','')
      const pdfb64ca = runCA(token, pdfb64)
    }
  }

  return (
    <div className="mtl">
     
        <div className="container">
         
        <div className="wording">
          <h1> Encrypt CA  </h1>
          <br></br>
          <br></br>
          
          <input type="text"  id="EncCA"  type="file" name="inputCA "></input>
          <button className="button btn btn-info" id="buttonCA" onClick={getFileForCA}> Encrypt CA </button>
          <br></br>
          <br></br>
          <div className="bb">
         
         
          
          <br></br>
         
          <div class="card-deck">
        <div class="card text-white bg-dark  border-danger " >

          <div class="card-body">


            <h3 class="card-title">How to use ?</h3>
            <p> 1. Connect VPN MTL </p>
          <p> 2. Attached file </p>
          <p> 3. Click Encrypt CA </p>
          

          </div>
        </div> 
        </div> 
        </div>
        <br></br>
          <h2> Found Problem ? </h2>
          <p> 1. Click <a href="https://10.200.51.52/MTL_AuthenInternal/oauth2/token"> >>> Here </a> </p>
          <p> 2. Click "Advance" and "process to 10.200.51.52" </p>
          </div>
          </div>
         
        

    </div>
  )
}

export default MtlPage