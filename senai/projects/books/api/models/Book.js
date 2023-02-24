class Book {
  constructor(i) {
    this.id = i.id;
    this.title = i.title;
    this.author = i.author;
    this.price = i.price;
    this.dateEmprest = i.dateEmprest;
    this.datePrevDev = i.datePrevDev;
    this.dateDevolution = i.dateDevolution;
  }
  create() {
    return `INSERT INTO book VALUE('${this.id}','${this.title}','${this.author}',${this.price}, '${this.dateEmprest}', '${this.datePrevDev}', '${this.dateDevolution}')`;
  }

  read() {
    if (this.id == undefined) return `SELECT * FROM book`;
    else return `SELECT * FROM book WHERE id = '${this.id}'`;
  }

  update() {
    return `UPDATE book SET title = '${this.title}', author = '${this.author}', price = ${this.price}, date_emprest = ${this.dateEmprest}, date_prev_dev = ${this.datePrevDev}, date_devolution = ${this.dateDevolution} WHERE id = '${this.id}'`;
  }

  delete() {
    return `DELETE FROM book WHERE id = '${this.id}'`;
  }
}
