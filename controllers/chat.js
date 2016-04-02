/**
 * GET /
 * Chat page.
 */
exports.getChat = function(req, res) {
  res.render('chat', {
    title: 'Chat'
  });
};

/**
 * POST /
 * Chat page/
*/