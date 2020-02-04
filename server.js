const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const pathToBuild = '../pwa-test-app/dist/pwa-test-app';


app.use(express.static(pathToBuild, { etag: false }));

router.get('/countries', (req, res) => {
    const list = ['india', 'australia', 'us'];
    res.status(200).json(list);
})
// app.use(router);

app.use('/api', router);

// fallback
// app.get("*", function (req, res) {
//     const file = path.resolve(pathToBuild, "index.html");
//     res.sendFile(file);
// });


const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
    if (err) return console.error(err);
    console.log(`app is listening on port ${PORT}`);

})