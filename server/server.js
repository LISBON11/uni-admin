const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const MongoClient = require('mongodb').MongoClient;
const boardStub = require('../data/boards');

let db;

MongoClient.connect('mongodb://localhost:27017', function(err, database) {
    if(err) return console.log(err);

    db = database.db('plainDatabase');


    // ------- времнннно
    // db.collection('boards').remove();
    // db.collection('boards').insertMany(boardStub)
    // -------

    app.listen(port, () => console.log(`Listening on port ${port}`));
})

app.get('/api/get/boards', (req, res) => {
    db.collection('boards').find().toArray()
        .then(docs => {
            const result = docs.reduce((acc, doc) => {
                const docId = doc._id;

                delete doc._id;

                acc[docId] = doc;

                return acc;
            }, {})

            res.send(result)
        })
        .catch(console.error)

    // db.collection('boards').insert({ name: 'Lizika'}, (err, res) => {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log('!!!!')
    // })
});

// app.get('/api/get/boards', (req, res) => {
//     db.collection('boards').find().toArray()
//         .then(docs => res.send(docs))
//         .catch(console.error)

//     // db.collection('boards').insert({ name: 'Lizika'}, (err, res) => {
//     //     if(err) {
//     //         console.log(err);
//     //     }
//     //     console.log('!!!!')
//     // })
// });



// app.post('/api/post/newBoard', (req, res) => {
//     res.json([
//         {
//             id: '0',
//             name: 'первый',
//             owner: 'me',
//             price: '50'
//         },
//         {
//             id: '1',
//             name: 'первый',
//             owner: 'Liza',
//             price: '50'
//         }
//     ])
// //   res.send({ express: 'Hello From Express' });
// });
