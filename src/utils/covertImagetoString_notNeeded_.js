const fs=require("fs")
function encoder(file) {
    var bitmap = fs.readFileSync(file);
    return "data:image/png;base64,"+new Buffer(bitmap).toString('base64');
}
path="../logo.png"
var base64str = encoder(path);
