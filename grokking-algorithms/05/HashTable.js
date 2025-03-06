class HashTable {
  #table;
  #size;
  constructor() {
    this.#table = new Array(127).fill(null);
    this.#size = 0;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.#table.length;
  }

  get size() {
    return this.#size;
  }

  set(key, value) {
    const index = this.#hash(key);
    if (this.#table[index] === null) this.#size++;
    this.#table[index] = [key, value];
  }

  get(key) {
    const index = this.#hash(key);
    const entrie = this.#table[index];
    return entrie ? entrie[1] : null;
  }

  delete(key) {
    const index = this.#hash(key);

    if (this.#table[index]) {
      this.#table[index] = null;
      this.#size--;
      return true;
    } else {
      return false;
    }
  }

  display() {
    console.log('\n');
    console.log('\x1b[33m' + `HashTable(${this.#size})` + '\x1b[0m' + ' {');
    for (let i = 0; i < this.#table.length; i++) {
      if (this.#table[i] === null) continue;
      console.log(
        '  ' + '\x1b[32m' + `'${this.#table[i][0]}'` + '\x1b[0m',
        '=>',
        '\x1b[32m' + `'${this.#table[i][1]}'` + '\x1b[0m'
      );
    }
    console.log('}');
    console.log('\n');
  }
}

const ht = new HashTable();

ht.set('hello', 'world');
ht.set('hey', 'there');
ht.set('hey', 'there');
ht.display();
console.log(ht.get('hey'));
ht.delete('hey');
console.log(ht.get('hey'));
ht.display();
