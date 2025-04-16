import ROSLIB from "roslib";
import ros from "../rosInstance";

const motorSpeedTopic = new ROSLIB.Topic({
  ros: ros,
  name: "/hight2low/motor",
  messageType: "std_msgs/Int32MultiArray"
});


export function getmotorSpeed(callback) {
  motorSpeedTopic.subscribe((msg) =>{
    callback(msg.data);
  })
  return () => motorSpeedTopic.unsubscribe();
}