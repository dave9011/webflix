const router = require("express").Router();
const isAdmin = require("../middleware/admin-only");
const List = require("../models/List");

router.get('/', async (req, res) => {
    let matchQuery = {
        ...(req.query.type && { type: req.query.type }),
        ...(req.query.genre && { genre: req.query.genre }),
    };
    
    let aggregateQueries = [
        {
            $sample: { size: 10 }
        }
    ];

    if (Object.keys(matchQuery).length) {
        aggregateQueries.push({ $match: matchQuery });
    }

    try {
        const list = await List.aggregate(aggregateQueries);

        res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', isAdmin, async (req, res) => {
    const list = new List(req.body);

    try {
        const savedlist = await list.save();

        res.status(200).json(savedlist);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', isAdmin, async (req, res) => {
    try {
        await List.findByIdAndDelete(req.params.id);

        res.status(200).json('The list has been deleted.');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;