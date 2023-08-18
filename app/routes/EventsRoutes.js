const express = require('express')

const router = express.Router()
const eventsController = require('../controllers/eventsController')

module.exports = () => {

    // metoda get  get events
    router.get('/', eventsController.index)
    // w controloerze events mamy metode funkcje ktora zwracam nam index. teraz podalismy tylko sciezko zeby nam to zerwcalo.


    //create POST// events//add
    router.post('/add', eventsController.create)


    // delete/ events/delete/:id
    router.delete('/delete/:id', eventsController.delete)

    return router


}


