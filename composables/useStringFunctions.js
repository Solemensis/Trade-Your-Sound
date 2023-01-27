export function cutString(str) {
  let index = str.indexOf("T");
  if (index === -1) {
    return str;
  }
  return str.slice(0, index);
}

export function replaceSpacesAndTrChars(str) {
  // Tr karakterleri ing karaktere dönüştür
  str = str.replace(/ç/g, "c");
  str = str.replace(/ğ/g, "g");
  str = str.replace(/ı/g, "i");
  str = str.replace(/ö/g, "o");
  str = str.replace(/ş/g, "s");
  str = str.replace(/ü/g, "u");

  return str.replace(/\s/g, "_");
}

export function formatString(str) {
  let newStr = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === "-") {
      newStr += " " + str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }
  return newStr.replace(/-/g, " ");
}
