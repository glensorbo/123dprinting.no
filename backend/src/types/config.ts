export type Config = {
  PORT: string;
  MONGODB: string;
  JWT_SECRET: string;
  SENDGRID_API_KEY: string;
  INIT_USER: string;
  INIT_PWD: string;
  NODE_ENV: 'development' | 'production';
};
