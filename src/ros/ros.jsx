import ros from "./rosInstance";

let connection = () => {};

ros.on("connection", () => {
  connection(true);
});
ros.on("error", (err) => {
  console.log(err);
  connection(false);
});
ros.on("close", () => {
  connection(false);
});

export function onConnect(callback){
  connection = callback;
}

export { getmotorSpeed } from "./toppic/motor_speed";
export default ros;
