const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect('mongodb://localhost:27017', function(err, database) {
    if(err) console.log(err);

    db = database.db('plainDatabase');

    app.listen(port, () => console.log(`Listening on port ${port}`));
})

app.get('/api/get/boards', (req, res) => {
    const collection = db.collection("boards").find().toArray(function(err, docs){
        console.log('docs', docs);

        res.json(docs)
    });;

    // db.collection('boards').insert({ name: 'Lizika'}, (err, res) => {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log('!!!!')
    // })
});



app.post('/api/post/newBoard', (req, res) => {
    res.json([
        {
            id: '0',
            name: 'первый',
            owner: 'me',
            price: '50'
        },
        {
            id: '1',
            name: 'первый',
            owner: 'Liza',
            price: '50'
        }
    ])
//   res.send({ express: 'Hello From Express' });
});
