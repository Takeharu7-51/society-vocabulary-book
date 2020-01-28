'use strict';
const pug = require('pug');
const Cookies = require('cookies');
const util = require('./handler-util');
const Post = require('./post');
const trackingIdKey = 'tracking_id';

function handle(req, res) {
  const cookies = new Cookies(req, res);
  addTrackingCookie(cookies);      
  switch (req.method) {
    case 'GET':  
      res.writeHead(200, {
        'Content-Type': 'text/html; chrset=utf-8'
      });
      res.end(pug.renderFile('./views/posts.pug'));
      break;
    case 'POST':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        console.info('投稿されました: ' + decoded);
        const dataArray = decoded.split('&');
        const dataArrayName = dataArray[0];
        const Name = dataArrayName.split('name=')[1]; //単語名
        const dataArrayDescription = dataArray[1];
        const Description = dataArrayDescription.split('description=+')[1]; //単語の説明
        const dataArrayWhich = dataArray[2];
        const Which = dataArrayWhich.split('which=')[1];//どの教科か
        Post.create({
          Name: Name, //単語名
          Description: Description, //単語の説明
          Which: Which, //どの教科か
          trackingCookie: cookies.get(trackingIdKey), //tracking 
        }).then(() => {
          handleRedirectPosts(req, res);        
        });
      });
      break;
      default:
        util.handleBadRequest(req, res);
        break;
  }
}

function handleDelete(req, res) {
    switch (req.method) {
      case 'POST':
        let body = [];
        req.on('data', (chunk) => {
          body.push(chunk);
        }).on('end', () => {
          body = Buffer.concat(body).toString();
          const decoded = decodeURIComponent(body);
          const id = decoded.split('id=')[1];
          Post.findById(id).then((post) => {
            if (req.headers.cookie.split('tracking_id=')[1] === post.trackingCookie) {
              post.destroy().then(() => {
                handleRedirectPosts(req, res);
              });
            }
          });
        });
        break;
      default:
        util.handleBadRequest(req, res);
        break;
    }
}

function addTrackingCookie(cookies) {
    if (!cookies.get(trackingIdKey)) {
      const trackingId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      const oneyear = new Date(Date.now() + (1000 * 60 * 60 * 24 * 365));
      cookies.set(trackingIdKey, trackingId, { expires: oneyear });   
    }
}
    
function handleRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
}

module.exports = {
  handle,
  handleDelete,
};
