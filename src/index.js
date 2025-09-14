import express from 'express';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
app.use(express.json());

// ▼▼▼ この2行を追加！！ ▼▼▼
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/public', express.static(path.join(__dirname, '../public')));
// ▲▲▲ ここまで ▲▲▲

// APIルート
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
