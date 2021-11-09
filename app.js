const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

// Get path to image directory, put the files inside this folder to rename
const fileDirPath = resolve(__dirname, 'hct');

// Get an array of the files inside the folder
const files = readdirSync(fileDirPath);

// Loop through each file that was retrieved
files.forEach(file => rename(
  fileDirPath + `/${file}`,
  (fileDirPath + `/${file}`).replace("：","-"),
  err => console.log(err)
));