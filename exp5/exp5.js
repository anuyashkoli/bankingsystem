const fs = require('fs');
const filePath = 'example.txt';
// Writing to a file
fs.writeFile(filePath, 'Hello, this is a file handling example in Node.js!',
(err) => {
if (err) {
console.error('Error writing file:', err);
} else {
console.log('File written successfully!');
// Reading the file
fs.readFile(filePath, 'utf8', (err, data) => {
if (err) {
console.error('Error reading file:', err);
} else {
console.log('File content:', data);
// Appending to the file

fs.appendFile(filePath, '\nAppending new content!', (err) => {

if (err) {
console.error('Error appending to file:', err);
} else {
console.log('Content appended successfully!');
// Deleting the file

fs.unlink(filePath, (err) => {

if (err) {
console.error('Error deleting file:', err);
} else {
console.log('File deleted successfully!');
}
});
}
});
}
});
}
});





// node exp5.js