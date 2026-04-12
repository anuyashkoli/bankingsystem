const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'; // MongoDB connection URL
const dbName = 'Pranav_Sagar_Shantanu'; // Database name
// Connect to MongoDB
async function connectToMongo() {
const client = new MongoClient(url);
try {
await client.connect();
console.log('Connected to MongoDB');
return client.db(dbName); // Returning the database instance
} catch (err) {
console.error('MongoDB connection error:', err);
}}
// Create (Insert) Operation
async function createDocuments() {
const db = await connectToMongo();
const collection = db.collection('users');
// Insert three entries with name, age, email, and roll
const newUsers = [
{ name: 'Pranav Bagal', age: 19, email: '2022ci02f@sigce.edu.in', roll: 4 },
{ name: 'Shantanu Hande', age: 20, email: '2022ci11f@sigce.edu.in', roll: 14 },
{ name: 'Sagar Gupta', age: 20, email: 'sagar@example.com', roll: 11 }
];
try {
const result = await collection.insertMany(newUsers);
console.log('Documents inserted with _id(s):', result.insertedIds);
} catch (err) {
console.error('Insert error:', err);
}}
createDocuments(); // Execute Create operation

async function readDocuments() {
const db = await connectToMongo();
const collection = db.collection('users');
try {
// Fetch only the 'name' field from all documents
const users = await collection.find({}, { projection: { _id: 0, name: 1 } }).toArray();
console.log('User Names:', users);
} catch (err) {
console.error('Read error:', err);
}}
readDocuments(); // Execute Read operation

// Update (Update) Operation
async function updateDocuments() {
const db = await connectToMongo();
const collection = db.collection('users');
try {
// Update Pranav Bagal's age
const resultPranav = await collection.updateOne(
{ name: 'Pranav Bagal' }, // Filter by name
{ $set: { age: 20 } } // Set age to 20
);
console.log(`Updated ${resultPranav.modifiedCount} document(s) for Pranav Bagal`);
// Update Shantanu Hande's roll number to 12
const resultShantanu = await collection.updateOne(
{ name: 'Shantanu Hande' }, // Filter by name
{ $set: { roll: 12 } } // Set roll number to 12
);
console.log(`Updated ${resultShantanu.modifiedCount} document(s) for Shantanu Hande`);
// Update Sagar Gupta's email to 2022ci10f@sigce.edu.in
const resultSagar = await collection.updateOne(
{ name: 'Sagar Gupta' }, // Filter by name
{ $set: { email: '2022ci10f@sigce.edu.in' } } // Set new email
);
console.log(`Updated ${resultSagar.modifiedCount} document(s) for Sagar Gupta`);
} catch (err) {
console.error('Update error:', err);

}
}
updateDocuments(); // Execute Update operation

// Delete (Delete) Operation - Delete Shantanu Hande's entry
async function deleteDocument() {
const db = await connectToMongo();
const collection = db.collection('users');
try {
// Delete Shantanu Hande entry
const result = await collection.deleteOne({ name: 'Shantanu Hande' });
console.log(`Deleted ${result.deletedCount} document(s)`);
} catch (err) {
console.error('Delete error:', err); }}
deleteDocument(); // Execute Delete operation

