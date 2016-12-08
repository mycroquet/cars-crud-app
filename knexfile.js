module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

  production: {
    client: 'pg',
    connection: process.env.'https://git.heroku.com/cars-crud-app.git'
  }

};
