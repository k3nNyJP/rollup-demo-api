import * as express from 'express';
import * as cors from "cors";
import { version } from "./package.json";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    version,
    timestamp: Date.now(),
  }).end();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
