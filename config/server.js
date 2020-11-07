module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  url:env('URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '96fe9fd261f4ccb2c0be2167cecb4314'),
    },
  },
});
