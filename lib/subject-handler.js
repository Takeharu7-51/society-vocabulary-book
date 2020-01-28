'use strict';
const pug = require('pug');
const postsHandler = require('./posts-handler');
const Post = require('./post');
const moment = require('moment-timezone');

function worldhistory(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; chrset=utf-8'
      });
      Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
        posts.forEach((post) => {
          post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');
        });
        res.end(pug.renderFile('./views/WorldHistory.pug', {
          posts: posts,
          nowcookie: req.headers.cookie.split('tracking_id=')[1]
        }));
      });
      break;
    }
}

function japanesehistory(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; chrset=utf-8'
      });
      Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
        posts.forEach((post) => {
          post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');
        });
        res.end(pug.renderFile('./views/JapaneseHistory.pug', {
          posts: posts,
          nowcookie: req.headers.cookie.split('tracking_id=')[1]
        }));
      });
      break;
    }
}

function geography(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; chrset=utf-8'
      });
      Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
        posts.forEach((post) => {
          post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');
        });
        res.end(pug.renderFile('./views/Geography.pug', {
          posts: posts,
          nowcookie: req.headers.cookie.split('tracking_id=')[1]
        }));
      });
      break;
    }
}

function modernsociety(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; chrset=utf-8'
      });
      Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
        posts.forEach((post) => {
          post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');
        });
        res.end(pug.renderFile('./views/ModernSociety.pug', {
          posts: posts,
          nowcookie: req.headers.cookie.split('tracking_id=')[1]
        }));
      });
      break;
    }
}

function logic(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; chrset=utf-8'
      });
      Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
        posts.forEach((post) => {
          post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');
        });
        res.end(pug.renderFile('./views/Logic.pug', {
          posts: posts,
          nowcookie: req.headers.cookie.split('tracking_id=')[1]
        }));
      });
      break;
    }
}

function politicseconomy(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; chrset=utf-8'
      });
      Post.findAll({order:[['id', 'DESC']]}).then((posts) => {
        posts.forEach((post) => {
          post.formattedCreatedAt = moment(post.createdAt).tz('Asia/Tokyo').format('YYYY年MM月DD日 HH時mm分ss秒');
        });
        res.end(pug.renderFile('./views/PoliticsEconomy.pug', {
          posts: posts,
          nowcookie: req.headers.cookie.split('tracking_id=')[1]
        }));
      });
      break;
    }
}

module.exports = {
  worldhistory,
  japanesehistory,
  geography,
  modernsociety,
  logic,
  politicseconomy
};
