
import rgba from 'rgba-convert';
export function getrgba(color) {
  let rgbcolor = rgba.css(color);
  rgbcolor = rgbcolor.split("");
  rgbcolor.splice(-1, 0, ",", "0", ".", "2");
  rgbcolor = rgbcolor.join("");
  return rgbcolor;
}
