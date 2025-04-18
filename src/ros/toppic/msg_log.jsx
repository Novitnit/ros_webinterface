import ROSLIB from "roslib";
import ros from "../rosInstance";

const msgTopic = new ROSLIB.Topic({
  ros,
  name: "/msg_data",
  messageType: "std_msgs/String"
});

export function subscribeMsgData(callback) {
  msgTopic.subscribe((msg) => {
    callback(msg.data);
  });

  return () => msgTopic.unsubscribe();
}


