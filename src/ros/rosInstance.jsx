import ROSLIB from "roslib";

const ros = new ROSLIB.Ros({
  url: `ws://0.0.0.0:9090`
});

export default ros;
