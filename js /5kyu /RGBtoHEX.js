// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
  function toHex(value){
    if(value<0)  value = 0 ;
    if(value >255) value = 255;
    let hex = value.toString(16).toUpperCase()
    return hex.length <= 1 ? "0"+ hex : hex
  }
  return toHex(r)+toHex(g)+toHex(b)
}
  
  console.log(rgb(0,   0,   0));
  