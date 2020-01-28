'use strict';
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost/vocasocie_database',
  {
    logging: false,
    operatorsAliases: false 
  });
const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Name: {
    type: Sequelize.TEXT
  },
  Description: {
    type: Sequelize.TEXT
  },
  Which: {
    type: Sequelize.STRING
  },
  trackingCookie: {
    type: Sequelize.STRING
  },
  goodPoint: {
    type: Sequelize.TEXT
  }
  
}, {
  freezeTableName: true,
  timestamps: true
});

Post.sync();
module.exports = Post;
