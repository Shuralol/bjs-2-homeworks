class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
  }
  Fix() {
    this.state *= 1.5;
  }

  set state(number) {
    if (number < 0) {
      this.state = 100;
    } else if (this.number > 100) {
      this.state = 100;
    } else {
      state = this.number;
    }
  }
  get state() {
    return this.state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount, state, type);
        this.type = 'detective';
    }
}

