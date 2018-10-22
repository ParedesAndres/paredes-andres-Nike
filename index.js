const express = require('express');
const hbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var app = express();

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'list';

// Create a new MongoClient
const client = new MongoClient(url);

var db;

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

    db = client.db(dbName);

  //client.close();
});



app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var boots = require('./boots');

app.get('/store', (req, res) => {

    const collection = db.collection('products');
    collection.find({}).toArray(function(err, doc){

        if(err){
            console.error(err);
            res.send('No hubo resultados');
            return;
        }
    
        var context = {
            boots: doc
        }
        res.render('store', context);
    });
});

app.get('/store/:product', (req, res) => {

    // Get the documents collection
    const collection = db.collection('products');

    // Insert some documents

    var pro = req.params.product;
   
    collection.find({name: {$eq: pro}}).toArray(function(err, doc){

        let obj = doc;

        if(err){
            console.error(err);
            res.send('Error 404');
            return;
        }
        
        /*let boot = boots.find(function(elem){
            if(elem.name == req.params.product){
                return true;
            }
        });*/
    
        var context = {
            img: obj[0].img,
            title: req.params.product,
        }       
        

        console.log(obj[0].img);
        res.render('product', context);

    });

    


});

app.listen(5500);