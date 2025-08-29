
const express = require('express');

const bfhlRoutes = require('./routes/bfhl_routes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/', bfhlRoutes);

app.listen(
    PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }
)