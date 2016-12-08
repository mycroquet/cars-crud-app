module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/cars'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
