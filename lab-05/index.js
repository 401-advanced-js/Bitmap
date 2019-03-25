
'use strict';

const fs = require('fs');

const pic1 = fs.readFileSync(`${__dirname}/assets/baldy.bmp`);
const pic2 = fs.readFileSync(`${__dirname}/assets/baldy.bmp`);
const pic3 = fs.readFileSync(`${__dirname}/assets/baldy.bmp`);
const pic4 = fs.readFileSync(`${__dirname}/assets/baldy.bmp`);


const toJail = function(){
  let color = 0;
  for (let i = 1154; i < pic1.length; i= i + 16) {
    pic1[i-1] = color;
    pic1[i] = color;
    pic1[i+1] = color;
  }
};
const demon = function() {
  for (let i = 1146; i < pic2.length; i++) {
    pic2[i] = 255 - pic2[i];
  }
};

const transform3 = function(){
  for (let i = 1146; i < pic3.length; i= i+2) {
    if(pic3[i] > 244){
      pic3[i] = 0;
      pic3[i-1] = 0;
      pic3[i+1] = 0;
    } 
  }
};

const blackAndWhite = function(){
  for (let i = 1146; i < pic4.length; i++) {
    if(pic4[i] <= 170){
      pic4[i] = 0;
    }
    if(pic4[i] > 170){
      pic4[i] = 255;
    }
  }
};

toJail();
fs.writeFile('./transformations/test1.bmp', pic1, err => {
  if (err) throw err;
});
demon();
fs.writeFile('./transformations/test2.bmp', pic2, err => {
  if (err) throw err;
});
transform3();
fs.writeFile('./transformations/test3.bmp', pic3, err => {
  if (err) throw err;
});
blackAndWhite();
fs.writeFile('./transformations/test4.bmp', pic4, err => {
  if (err) throw err;
});









// const bald = fs.readFileSync(`${__dirname}/assets/baldy.bmp`);
// Create a naked object to model the bitmap properties
// const parsedBitmap = {};

// // Identify the offsets by reading the bitmap docs
// const FILE_SIZE_OFFSET = 2;
// const WIDTH_OFFSET = 18;
// const HEIGHT_OFFSET = 22;
// const BYTES_PER_PIXEL_OFFSET = 28;
// const COLOR_PALLET_OFFSET = 46;
// const COLOR_TABLE_OFFSET = 54; // number of bytes in the color table (color table === pixel array)
// const PIXEL_ARRAY_OFFSET = 310; // The actual colors of the image. 256 (color table, a table of colors!) + 54 previous header)

// // pixel-array tells you which part of the color table is being used by that pixel.

// //------------------------------------------------------
// // READING INFORMATION FROM THE BITMAP FILE
// //------------------------------------------------------

// parsedBitmap.type = bald.toString('utf-8', 0, 2);
// parsedBitmap.fileSize = bald.readInt32LE(FILE_SIZE_OFFSET);
// parsedBitmap.bytesPerPixel = bald.readInt16LE(BYTES_PER_PIXEL_OFFSET);
// parsedBitmap.height = bald.readInt32LE(HEIGHT_OFFSET);
// parsedBitmap.width = bald.readInt32LE(WIDTH_OFFSET);
// parsedBitmap.colorPallet = bald.readInt32LE(COLOR_PALLET_OFFSET);
// parsedBitmap.colorTable = bald.readInt32LE(COLOR_TABLE_OFFSET);
// parsedBitmap.pixelArray = bald.readInt32LE(PIXEL_ARRAY_OFFSET);

// // Bottom left boundary = 1146
// // Top right boundary = bald.length
// // Color table