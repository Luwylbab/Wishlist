const router = require('express').Router();
const { List } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newList = await List.create({
      name: req.body.name,
      expiration: req.body.expiration,
      item: req.body.item,
      price: parseInt(req.body.price),
      link: req.body.link,
      user_id: req.session.user_id,
    });

    res.status(200).json(newList);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// router.post('/add', withAuth, async (req, res) => {
//   try {
//     const newItem = await List.create({
//       item: req.body.item,
//       price: parseInt(req.body.price),
//       link: req.body.link,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newItem);
//   } catch (err) {
//     console.log(err)
//     res.status(400).json(err);
//   }
// });

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedList = await List.update(
      {
        item: req.body.item,
        price: req.body.price,
        link: req.body.link,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (!updatedList[0]) {
      res.status(404).json({ message: 'No List found with this id!' });
      return;
    }

    res.status(200).json(updatedList);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedList = await List.destroy({
      where: {
        id: req.params.id
        // user_id: req.session.user_id,
      },
    });

    if (!deletedList) {
      res.status(404).json({ message: 'No List found with this id!' });
      return;
    }

    res.status(200).json(deletedList);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;