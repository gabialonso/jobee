export default {
  secret: process.env.JWT_SECRET || 'secreto_super_seguro',
  expiresIn: '1d',
};
