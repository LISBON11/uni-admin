import express from 'express';

const app = express();
const router = express.Router();

router.get('/', function(req, res, next){
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
})

// const server = app.listen(8080, () => {

// })
