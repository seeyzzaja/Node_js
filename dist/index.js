import { hello } from "#hallo";
import moment from "moment";
import http from "node:http";
const requestListener = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    // res.write(`Hello, world! Waktu saat ini: ${moment().format('YYYY-MM-DD HH:mm:ss')}`)
    // res.end(JSON.stringify({
    //     message:hello(),
    //     time:moment().format('YYYY-MM-DD HH:mm:ss'),
    //     url:req.url
    // }))
    if (req.url === "/") {
        res.end(JSON.stringify({
            message: hello(),
            time: moment().format("YYYY-MM-DD HH:mm:ss"),
            url: req.url,
        }));
    }
    else if (req.url === "/time") {
        res.end(JSON.stringify({
            message: "you are accesing endpoint /time",
            time: moment().format("YYYY-MM-DD HH:mm:ss"),
            url: req.url,
        }));
    }
    else {
        res.statusCode = 404;
        res.write(JSON.stringify({
            message: "you are accesing endpoint that not found",
            url: req.url,
        }));
        res.end();
    }
};
const server = http.createServer(requestListener);
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
//# sourceMappingURL=index.js.map