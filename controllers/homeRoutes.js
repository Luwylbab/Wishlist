const router = require('express').Router();
const { List, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all Lists and JOIN with user data
    const listData = await List.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const lists = listData.map((List) => list.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      lists, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/list/:id', async (req, res) => {
  try {
    const listData = await List.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const list = listData.get({ plain: true });

    res.render('list', {
      ...list,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const listData = await List.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const list = listData.get({ plain: true });

    res.render('edit', {
      ...list,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: List }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});
router.get('/calendar', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('calendar-template', { 
      calendarData:[], 
      logged_in: req.session.logged_in, 
    layout:'calendar'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
