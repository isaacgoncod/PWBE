class Book {
  constructor(i) {
    this.id = i.id;
    this.title = i.title;
    this.author = i.author;
    this.price = i.price;
    this.date_emprest = i.date_emprest;
    this.date_prev_dev = i.date_prev_dev;
    this.date_devolution = i.date_devolution;
    this.tax_day = this.taxDay();
  }

  create() {
    return `INSERT INTO book VALUE('${this.id}','${this.title}','${this.author}',${this.price}, '${this.date_emprest}', '${this.date_prev_dev}', null, null)`;
  }

  read() {
    if (this.id == undefined) return `SELECT * FROM book`;
    else return `SELECT * FROM book WHERE id = '${this.id}'`;
  }

  update() {
    if (this.date_devolution == undefined) {
      return `UPDATE book SET title = '${this.title}', author = '${this.author}', price = ${this.price}, date_emprest = '${this.date_emprest}', date_prev_dev = '${this.date_prev_dev}', date_devolution = null, tax_day = null WHERE id = '${this.id}'`;
    } else {
      return `UPDATE book SET title = '${this.title}', author = '${this.author}', price = ${this.price}, date_emprest = '${this.date_emprest}', date_prev_dev = '${this.date_prev_dev}', date_devolution = '${this.date_devolution}', tax_day = ${this.tax_day} WHERE id = '${this.id}'`;
    }
  }

  delete() {
    return `DELETE FROM book WHERE id = '${this.id}'`;
  }

  taxDay() {
    let dateDevolution = new Date(this.date_devolution);
    let datePrevDev = new Date(this.date_prev_dev);

    let diferenceDay = dateDevolution.getTime() - datePrevDev.getTime();
    let days = diferenceDay / (1000 * 3600 * 24);
    
    return this.price * (days / 100);
  }
}

module.exports = Book;
