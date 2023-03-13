import express from "express";
import { __dirname } from './__dirname.js';
import mongodb from 'mongodb';

let app = express();
let mongoClient = new mongodb.MongoClient('mongodb://127.0.0.1:27017/');

app.use(express.static(__dirname + '/'));

app.listen(3000, () => {
  console.log('running');
});

const connect = async () => {
	try {
		let db = mongoClient.db('test');
		let coll = db.collection('users');
		
		app.get('/users', async function(req, res) {
      let users = await coll.find().toArray();
      res.send(users);
    });
		
	} catch (error) {
		console.log(error);
	}
};

connect();