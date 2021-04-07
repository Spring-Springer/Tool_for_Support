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
        
          </div >
          <p className="button button-large is-primary"> ข้อมูลสำหรับพนักงานใหม่ >>><a href=
        "https://docs.google.com/document/d/1yqdvvC1ZGtLq92uSoRK1ZK9qCk7S-Mr4kgWu7xi36q0/edit" 
        target="button" class="btn btn-primary btn-sm"
        >คลิ๊ก</a> 
        </p>
          <br></br>
         
          <br></br>
          <div class="MenuBarTextAlign">
          <div class="card-deck">
        <div class="card text-white bg-dark  border-danger " >

          <div class="card-body">


            <h3 class="card-title">EncryptCA for MTL</h3>
          <p>ใช้สำหรับการครอบ CA</p>
            <a href="MTL/EncryptCA" class="btn btn-info">คลิ๊ก</a>

          </div>
        </div> 

        <div class="card text-white bg-dark border-danger">

        <div class="card-body">

          <h3 class="card-title">Basic WEB API</h3>
          <p class="card-text">ศึกษาการสร้าง WEB API แบบใช้งานได้จริง</p>

          <a href="#" class="btn btn-info">อ่านต่อ...</a>

        </div>
      </div>

      <div class="card text-white bg-dark border-danger">

<div class="card-body">

  <h3 class="card-title">GEN SI</h3>
  <p class="card-text">การใช้ตัว GEN เอกสาร</p>

  <a href="#" class="btn btn-info">อ่านต่อ...</a>



</div>

</div>

      </div>
          <p>บล็อคเล่าเรื่องราวเกี่ยวกับ Code / Programming ต่างๆ</p>
          <p>ทั้ง JavaScript, Node.js, React.js รวมถึง Stack ที่เจ้าของบล็อคสนใจ</p>
        </div>
        
        

        </div>
      </section>
    </div>
  )
}

export default MtlPage
