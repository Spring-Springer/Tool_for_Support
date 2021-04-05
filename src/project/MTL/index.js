import React from 'react'
import './index.css';
import { getTokenCA } from "./ca-encrypt/caToken.js";
import { runCA } from "./ca-encrypt/caEncrypt.js"
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
      <section class="hero is-danger">
        <div className="container">
          <div className="mtl title">MTL
          </div>
          <p>บล็อคเล่าเรื่องราวเกี่ยวกับ Code / Programming ต่างๆ</p>
          <p>ทั้ง JavaScript, Node.js, React.js รวมถึง Stack ที่เจ้าของบล็อคสนใจ</p>
        </div>
        <div>
          <h1> EncryptCA for MTL </h1>
          <input id="EncCA" type="file" name="inputCA"></input>
          <button className="button" id="buttonCA" onClick={getFileForCA}> Encrypt CA </button>
          <h2> How to use </h2>
          <p> 1. Connect VPN MTL </p>
          <p> 2. Attached file </p>
          <p> 3. Click Encrypt CA </p>
          <h2> First Time? </h2>
          <p> 1. Click <a href="https://10.200.51.52/MTL_AuthenInternal/oauth2/token"> Here </a> </p>
          <p> 2. Click "Advance" and "process to 10.200.51.52" </p>
        </div>
      </section>
    </div>
  )
}

export default MtlPage
