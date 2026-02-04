import http from 'node:http';
import moment from "moment";
import { helloWorld } from './world.js';
import { music } from './music.js';
import { time } from './time.js';
import { api } from './api.js';
import { audio } from './audio.js';
const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    if (req.url === '/') {
        res.end(JSON.stringify({
            message: helloWorld(),
            time: moment().format("YYYY-MM-DD HH:mm:ss"),
            url: req.url,
        }));
    }
    else if (req.url === '/music') {
        res.end(JSON.stringify({
            message: music(),
            time: moment().format("YYYY-MM-DD HH:mm:ss"),
            url: req.url,
        }));
    }
    else if (req.url === '/audio') {
        res.end(JSON.stringify({
            message: audio(),
            time: moment().format("YYYY-MM-DD HH:mm:ss"),
            url: req.url,
        }));
    }
    else if (req.url === '/api') {
        res.end(JSON.stringify({
            message: api(),
            time: moment().format("YYYY-MM-DD HH:mm:ss"),
            url: req.url,
        }));
    }
    else if (req.url === '/time') {
        res.end(JSON.stringify({
            message: time(),
            time: moment().format("YYYY-MM-DD HH:mm:ss"),
            url: req.url,
        }));
    }
};
const server = http.createServer(requestListener);
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
//# sourceMappingURL=index.js.map