module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '372150b1279f6c8c4667441bef0f76d3'),
  },
});
