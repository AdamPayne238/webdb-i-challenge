const express = require('express');

const knex = require('../dbConfig.js');

const router = express.Router();

// WORKING
router.get('/', (req, res) => {
    knex
        .select('*')
        .from('accounts')
        .then(accounts => {
            res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({ error: "failed to get accounts from database"})
    })
});

// WORKING
router.get('/:id', (req, res) => {
    knex.
    select('*')
    .from('accounts')
    .where('id', '=', req.params.id)
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({ error: "Failed to find account by that ID!!!!!"})
    })
});

// WORKING
router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id') //Ignore the console warning on SQLite
    .into('accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(error => {
        res.status(500).json({ error: "Failed to insert account!!!!!!"})
    })
});

// WORKING
router.delete('/:id', (req, res) => {
    // const changes = req.body;

    knex('accounts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(error => {
        res.status(500).json({ error: "Failed to delete account"})
    })
});

// WORKING
router.put('/:id', (req, res) => {
    const changes = req.body;

    knex('accounts')
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
        res.status(200).json(count)
    })
    .catch(error => {
        res.status(500).json({ error: "Failed to update account"})
    })
});

module.exports = router;
