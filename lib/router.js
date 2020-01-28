'use strict';
const postsHandler = require('./posts-handler');
const subjectHandler = require('./subject-handler');
const util = require('./handler-util');

function route(req, res) {
  if (process.env.DATABASE_URL
    && req.headers['x-forwarded-proto'] === 'http') {
      util.handleNotFound(req, res);
    }
  switch (req.url) {
    case '/posts':
      postsHandler.handle(req, res);
      break;
    case '/posts?delete=1':
      postsHandler.handleDelete(req, res);
      break;
    case '/WorldHistory':
      subjectHandler.worldhistory(req, res);
      break;
    case '/JapaneseHistory':
      subjectHandler.japanesehistory(req, res);
      break;
    case '/Geography':
      subjectHandler.geography(req, res);
      break;
    case '/ModernSociety':
      subjectHandler.modernsociety(req, res);
      break;
    case '/Logic':
      subjectHandler.logic(req, res);
      break;
    case '/PoliticsEconomy':
      subjectHandler.politicseconomy(req, res);
      break;
    case '/favicon.ico':
      util.handleFavicon(req, res);
      break;
    default:
      util.handleNotFound(req, res);
      break;
  }
}

module.exports = {
  route
};
