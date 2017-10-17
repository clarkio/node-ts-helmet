import * as express from 'express';
import * as helmet from 'helmet';

const app = express();
const port = process.env.PORT || 4000;
const runningMessage = 'Server is running on port ' + port;

app.use(helmet());

app.get('/', (req, res) => {
  console.log('API was successfully requested');
  res.send(runningMessage);
});

app.listen(port, () => {
  console.log(runningMessage);
});
