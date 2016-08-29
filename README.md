# wmic-to-tabular

Parse [`wmic`](http://ss64.com/nt/wmic.html) output into structured data.

## Usage

### From the command line

Export to TSV.

`wmic cpu get Name,NumberOfCores,NumberOfLogicalProcessors | node index.js > cpu.tsv`

Export to CSV (provide a separator).

`wmic cpu get Name,NumberOfCores,NumberOfLogicalProcessors | node index.js , > cpu.csv`

### As library

````js
const wmicToTabular = require("./lib/wmic-to-tabular");
const separator = "\t";
const tabular = wmicToTabular(wmic_output_string);
console.log(tabular.headers.join(separator));
tabular.rows.forEach(row => console.log(row.join(separator)));
````
