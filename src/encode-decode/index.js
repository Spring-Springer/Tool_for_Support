const { render } = require("@testing-library/react");

function encode(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
    const element = document.createElement("a");
    const file_wE = new Blob([reader.result.toString()],
      { type: 'text/plain;charset=utf-8' });
    console.log(file_wE);
    element.href = URL.createObjectURL(file_wE);
    element.download = "fileEncode.b64";
    document.body.appendChild(element);
    element.click();
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}
function decode(input) {
  console.log(typeof input)
  if (typeof input == 'object') {
    var reader = new FileReader();
    reader.readAsText(input);
    reader.onload = function () {
      decodeAndDownload(reader.result)    
    }
  }
  else if (typeof input == 'string') {
    decodeAndDownload(input)
    console.log(typeof input)
  }
}
function decodeAndDownload(data){
    console.log(typeof data)
    const checkType = fileType(data)
    console.log(checkType)
    const element = document.createElement('a');
    const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {

    console.log(b64Data)
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
    }

      const file_wD = b64toBlob([checkType[1].toString()], checkType[0]);
      console.log('file_wD' + file_wD);

      element.href = URL.createObjectURL(file_wD);
      element.download = "fileDecode";
      document.body.appendChild(element);
      element.click();
}

function fileType(readResult) {
  if (readResult.toString().includes('data:image/jpeg;base64') || readResult.toString().includes('/9j/')) {
    const Result = readResult.replace('data:image/jpeg;base64,', "")
    console.log(readResult)
    const type = 'image/jpeg'
    return [type, Result];
  }
  else if (readResult.toString().includes('data:image/png;base64') || readResult.toString().includes('iVBORw0KG')) {
    const Result = readResult.replace('data:image/png;base64,', "")
    console.log(readResult)
    const type = 'image/png'
    return [type, Result];
  }
  else if (readResult.toString().includes('data:application/pdf;base64,') || readResult.toString().includes('JVBER')) {
    const Result = readResult.replace('data:application/pdf;base64,', '')
    const type = 'application/pdf'
    return [type, Result];
  }
}
module.exports = { encode, decode }

