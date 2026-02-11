// import http from 'node:http';
// import moment from "moment";
// import { helloWorld } from '#world';
// import { music } from '#music';
// import { time } from '#time';
// import { api } from '#api';
// import { audio } from '#audio';


// const requestListener =(
//     req:http.IncomingMessage,
//     res:http.ServerResponse
// ) =>{
    
//     res.setHeader('Content-Type','application/json');
//     res.statusCode=200

//     if(req.url === '/'){
//       res.end(
//             JSON.stringify({
//               message:helloWorld() ,
//               time: moment().format("YYYY-MM-DD HH:mm:ss"),
//               url: req.url,
//             })
//           );  
//     }
//     else if (req.url === '/music'){
//          res.end(
//             JSON.stringify({
//               message:music() ,
//               time: moment().format("YYYY-MM-DD HH:mm:ss"),
//               url: req.url,
//             })
//           );  
//     }
//     else if (req.url === '/audio'){
//          res.end(
//             JSON.stringify({
//               message:audio() ,
//               time: moment().format("YYYY-MM-DD HH:mm:ss"),
//               url: req.url,
//             })
//           );  
//     }
//     else if (req.url === '/api'){
//          res.end(
//             JSON.stringify({
//               message:api() ,
//               time: moment().format("YYYY-MM-DD HH:mm:ss"),
//               url: req.url,
//             })
//           );  
//     }
//     else if (req.url === '/time'){
//          res.end(
//             JSON.stringify({
//               message:time() ,
//               time: moment().format("YYYY-MM-DD HH:mm:ss"),
//               url: req.url,
//             })
//           );  
//     }


// }

// const server= http.createServer(requestListener)
// server.listen(3000,()=>{
//     console.log("Server running at http://localhost:3000/");
    
// })