const { createCanvas, loadImage } = require("canvas")
const QRCode = require('qrcode')
const imageDataURI = require('image-data-uri')

async function drawLogo(text,photo,options) {
  //if option width not dounf will through err
  if(!options.width||options.width<116){
    var mywidth=20;
  }else{
    var mywidth=options.width/5;
  }
  const canvas = createCanvas(mywidth, mywidth);
  QRCode.toCanvas(
    canvas,
    text,
    options
  );
  const ctx = canvas.getContext("2d");
  const img = await loadImage(photo);
  const center = canvas.width/2;

  ctx.drawImage(img, center-mywidth/2, center-mywidth/2, mywidth, mywidth);
  let qrCode=canvas.toDataURL("image/png");
  let filePath = '../out/path/fileName3';
  //to save as png image
  //imageDataURI.outputFile(qrCode, filePath).then(res => console.log(res))
  return qrCode;
}

module.exports=drawLogo