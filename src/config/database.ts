import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('mydb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

