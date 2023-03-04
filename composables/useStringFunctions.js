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
  if (str === "environmental-sounds") {
    return "Env. Sounds";
  }

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

export function getFormattedFileName(date) {
  const year = String(date.getFullYear()).slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  return `${day}_${month}_${year}_${hour}${minute}`;
}

export function getContentBeforeUnderscore(str) {
  return str.split("_")[0];
}

export function getSubstring(str) {
  const match = "public/audios/public/";
  const index = str.indexOf(match);
  if (index === -1) {
    return null;
  }
  return str.substring(index + match.length);
}

export function extractTime(dateString) {
  const timeString = dateString.substring(
    dateString.indexOf("T") + 1,
    dateString.indexOf("T") + 6
  );
  const timeParts = timeString.split(":");
  const date = new Date(dateString);
  date.setHours(date.getHours());
  timeParts[0] = date.getHours();
  const newTimeString = timeParts.join(":");
  return newTimeString;
}

export function addHttpsIfNeeded(str) {
  if (!str.startsWith("https://")) {
    str = "https://" + str;
  }
  return str;
}

export function validateNickname(nickname) {
  // Only allow letters (uppercase and lowercase) and numbers
  const regex = /^[a-zA-Z0-9]+$/;

  if (!regex.test(nickname)) {
    return false;
  }

  return true;
}
