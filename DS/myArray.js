class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(value) {
    this.data[this.length++] = value;
    return this.length;
  }
  delete(index) {
    const value = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length-1];
    this.length--;
    return value;
  }
  pop() {
    const value = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return value;
  }
}
const array = new MyArray();
console.log(array);
console.log(array.get(1));
array.push("a");
console.log(array.get(0));
array.push("b");
array.push("c");
console.log(array);
console.log(array.pop());
array.push("d");
console.log(array);
array.push("e");
console.log(array);
console.log(array.delete(2));
console.log(array);