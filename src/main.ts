import * as express from 'express';
import { join } from 'path';
import { version } from "./package.json";

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({
    version,
    timestamp: Date.now(),
  }).end();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
