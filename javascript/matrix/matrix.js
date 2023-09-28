export class Matrix {
  constructor(data) {
    this.dataRows = data.split("\n").map(rowString => rowString.split(" ").map(s => Number(s)));
    // the reduce transposes rows to columns by mapping over rows and for each value in the row
    // producing new row representing the column containing that value in the transposed matrix
    this.dataColumns = this.dataRows.reduce((columns, row) => row.map((_, i) => [...(columns[i] || []), row[i]]), [])
  }

  get rows() {
    return this.dataRows;
  }

  get columns() {
    return this.dataColumns;
  }
}
