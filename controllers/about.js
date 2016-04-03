/**
 * GET /
 * About page.
 */
exports.getAbout = function(req, res) {
  res.render('about', {
    title: 'About'
  });
};
