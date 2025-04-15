import ROSLIB from "roslib";

const ros = new ROSLIB.Ros({
  url: `ws://0.0.0.0:9090`
});

let connection = () => {};

ros.on("connection", () => {
  console.log("Connected to websocket server.");
  connection(true);
})
ros.on("error", (err) => {
  console.log(err);
  connection(false);
})

ros.on("close", () => {
  console.log("Connection closed.");
  connection(false);
})

export function onConnect(callback){
    connection = callback;
}