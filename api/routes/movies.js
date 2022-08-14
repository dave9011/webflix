const router = require("express").Router();
const isAdmin = require("../middleware/admin-only");
const Movie = require("../models/Movie");

router.get('/random', async (req, res) => {
    const type = req.query.type;

    try {
        let movie = await Movie.aggregate([
            {
                $match: { isSeries: type === 'series' },
            },
            {
                $sample: { size: 1},
            }
        ]);

        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/find/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);

        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', isAdmin, async (req, res) => {
    try {
        const movies = await Movie.find().sort({ _id: -1 });

        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', isAdmin, async (req, res) => {
    const movie = new Movie(req.body);

    try {
        const savedMovie = await movie.save();

        res.status(200).json(savedMovie);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', isAdmin, async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body
            },
            {
                new: true,
            }
        );

        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', isAdmin, async (req, res) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);

        res.status(200).json('The movie has been deleted.');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;