import util from 'util';
import mysql from 'mysql';
import express from 'express';

const port = 3000;
const app = express();

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('connected to database');
})

const query = util.promisify(connection.query).bind(connection);

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static('public'));

app.get('/', async (request, response) => {
  try {
    const peoples = await query('select * from people order by id');
    response.render('index', {peoples: peoples});
  } catch (err) {
    return response.send('error');
  }
});

app.post('/', async (request, response) => {
  const {name} = request.body;
  try {
    await query(`insert into people values(default, "${name}")`);
    return response.send();
  } catch (err) {
    if (err.code == 'ER_DUP_ENTRY') {
      return response.json({ err: 'duplicate entry' });
    }
    return response.json({ err: 'unregistered data'});
  }
});

app.listen(port, () => {
  console.log(`server is runing in ${port}`)
});
