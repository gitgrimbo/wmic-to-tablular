function wmicToTabular(data) {
  const truthy = it => it;

  // Uses the widths of the headers to chop up the lines.
  const splitLineUsingHeaders = headers => line => {
    let i = 0;
    return headers.map(h => {
      const hlen = h.length;
      const col = line.substring(i, i + hlen);
      i += hlen;
      return col.trim();
    });
  };

  const lines = data.split(/[\n\r]/).filter(truthy);

  const headersStr = lines.splice(0, 1)[0];
  // Headers are separated by 2 or more spaces
  const headers = headersStr.match(/[^\s]+\s+/g);

  return {
    headers: headers.map(h => h.trim()),
    rows: lines.map(splitLineUsingHeaders(headers))
  };
}

module.exports = wmicToTabular;
