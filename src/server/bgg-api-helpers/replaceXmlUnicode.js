const replaceXmlUnicode = (string) => {
  let copyStr = string.slice();
  copyStr = copyStr.replaceAll('    ', '');
  copyStr = copyStr.replaceAll('&#10;&#10;&#10;&#10;', '&#10;');
  copyStr = copyStr.replaceAll('&#10;&#10;&#10;', '&#10;&#10;');
  copyStr = copyStr.replaceAll('&#10;', '\n');
  copyStr = copyStr.replaceAll('&quot;', '"');
  copyStr = copyStr.replaceAll('&rsquot;', '\'');
  copyStr = copyStr.replaceAll('&mdash;', '\u2014');
  copyStr = copyStr.replaceAll('&#226;&#128;&#147;', '\u2014');
  return copyStr;
};

module.exports = {
  replaceXmlUnicode,
};
