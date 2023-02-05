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

export function truncateString(str) {
  if (str.length > 75) {
    return str.substring(0, 75) + "...";
  }
  return str;
}

export function truncateShortString(str) {
  if (str.length > 35) {
    return str.substring(0, 35) + "...";
  }
  return str;
}

export function truncateShorterString(str) {
  if (str.length > 23) {
    return str.substring(0, 23) + "...";
  }
  return str;
}

// export function sanitizeInput(input) {
//   let output = input.replace(/[^0-9.,]/g, "").replace(/,/g, ".");
//   let dotIndex = output.indexOf(".");
//   if (dotIndex !== -1) {
//     let decimal = output.substring(dotIndex + 1);
//     if (decimal.length > 1) {
//       decimal = decimal.substring(0, 1);
//       output = output.substring(0, dotIndex + 1) + decimal;
//     }
//   }
//   return output;
// }
