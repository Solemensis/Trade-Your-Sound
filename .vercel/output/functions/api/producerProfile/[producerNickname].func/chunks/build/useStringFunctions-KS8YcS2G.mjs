function cutString(str) {
  let index = str.indexOf("T");
  if (index === -1) {
    return str;
  }
  return str.slice(0, index);
}
function formatString(str) {
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
function truncateString(str) {
  if (str.length > 75) {
    return str.substring(0, 75) + "...";
  }
  return str;
}
function truncateShortString(str) {
  if (str.length > 35) {
    return str.substring(0, 35) + "...";
  }
  return str;
}
function truncateShorterString(str) {
  if (str.length > 23) {
    return str.substring(0, 23) + "...";
  }
  return str;
}
function getContentBeforeUnderscore(str) {
  return str.split("_")[0];
}
function extractTime(dateString) {
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
function addHttpsIfNeeded(str) {
  if (!str.startsWith("https://")) {
    str = "https://" + str;
  }
  return str;
}

export { truncateShortString as a, addHttpsIfNeeded as b, cutString as c, truncateShorterString as d, extractTime as e, formatString as f, getContentBeforeUnderscore as g, truncateString as t };
//# sourceMappingURL=useStringFunctions-KS8YcS2G.mjs.map
