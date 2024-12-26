import mysql from 'mysql2/promise';

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'postal_db',
});

(async () => {
    try {
      // Test if we can connect to the database
      const [rows] = await db.query('SELECT 1');
      console.log('Database connection successful:', rows);
    } catch (error) {
      console.error('Database connection error:', error);
    }
  })();