const express = require('express');

const db = require('../data/db-config.js');
const router = express.Router();

router.get('/', (req, res) => {
    //select * from cars
    db('cars')
    .then(car => {
        res.status(200).json(car);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    //insert into Cars
    //values(dlfja;dslkfj)
    const info = req.body;
    if (!info.vin){
        res.status(400).json({ message: "Please at least put a vin" });
    } else {
        db('cars')
        .insert(info, 'id')
        .then(idarray => {
            const last = idarray[0];
            res.status(201).json(last);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    }
    
})

router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    //update Cars 
    //set stuff 
    //where id = :id
    db('cars')
    .where({id})
    .update(changes)
    .then(count => {
        if(count > 0){
            res.status(200).json(changes);
        } else {
            res.status(404).json({ message: "Could not find that" });
        }
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.delete('/:id', (req, res) => {
    //delete from Cars
    //where id = :id

    db('cars')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        res.status(200).json(count);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;

