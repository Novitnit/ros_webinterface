import ROSLIB from "roslib";

const ros = new ROSLIB.Ros({
  url: `ws://0.0.0.0:9090`
});

let connection = () => {};

ros.on("connection", () => {
  connection(true);
})
ros.on("error", (err) => {
  console.log(err);
  connection(false);
})

ros.on("close", () => {
  connection(false);
})

export function onConnect(callback){
    connection = callback;
}