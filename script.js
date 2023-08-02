const codeSnippets = [
    `function greet(name) {
    return 'Hello, ' + name + '!';
  }`,
    `const fruits = ['apple', 'banana', 'orange'];
  fruits.forEach(fruit => {
    console.log('I love ' + fruit);
  });`,
    `class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getArea() {
      return this.width * this.height;
    }
  }`
];

function generateRandomCode() {
    const randomIndex = Math.floor(Math.random() * codeSnippets.length);
    const randomCode = codeSnippets[randomIndex];
    document.getElementById('codeSnippet').textContent = randomCode;
}