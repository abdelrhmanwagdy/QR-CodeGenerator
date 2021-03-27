function checkDarkness(dark,light) {
    //console.log(dark);
    const darkHex = dark.replace('#', '');
    const lightHex = light.replace('#', '');
    let c_r = parseInt(darkHex.substr(0, 2), 16);
    let c_g = parseInt(darkHex.substr(2, 2), 16);
    let c_b = parseInt(darkHex.substr(4, 2), 16);

    const darkness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    //console.log(darkness);

    //console.log(light);
    c_r = parseInt(lightHex.substr(0, 2), 16);
    c_g = parseInt(lightHex.substr(2, 2), 16);
    c_b = parseInt(lightHex.substr(4, 2), 16);

    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    //console.log(brightness);

    if(darkness<brightness){
        return true;
    }else {
        return false;
    }
}
module.exports=checkDarkness