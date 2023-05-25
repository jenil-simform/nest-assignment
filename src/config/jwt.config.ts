import { registerAs } from '@nestjs/config';

export const JWT_CONFIG = registerAs('JWT', () => {
  return {
    SECRET: process.env['JWT_SECRET'],
    EXPIRESIN: process.env['JWT_EXPIRESIN'],
  };
});
