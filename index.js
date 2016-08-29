/*

Takes output from wmic and outputs TSV (or 'any-SV') format.

E.g.:

wmic cpu get Name,NumberOfCores,NumberOfLogicalProcessors,CurrentClockSpeed,MaxClockSpeed | node wmic-to-tsv.js > cpu.tsv

*/

const wmicToTabular = require("./lib/wmic-to-tabular");

function collectStdIn(done) {
  let data = "";

  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", function(chunk) {
    data += chunk;
  });

  process.stdin.on("end", function() {
    done(data);
  });
}

const args = process.argv.slice(2);

// Default separator is a tab, but can supply a different one as an argument.
const separator = args[0] || "\t";

collectStdIn(data => {
  const tabular = wmicToTabular(data);
  console.log(tabular.headers.join(separator));
  tabular.rows.forEach(row => console.log(row.join(separator)));
});
