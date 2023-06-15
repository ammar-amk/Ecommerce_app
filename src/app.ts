import express from 'express';
import { sequelize } from './config/database';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, async () => {
  try {
    console.log('Authenticating application')
    await sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.')
    
    })

    console.log(`Server is running on port ${PORT}`);
} catch (error) {
    console.error('Unable to connect to the database:', error)
}
});
