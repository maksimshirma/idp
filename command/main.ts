import { Light, LightOffCommand, LightOnCommand } from "./Light";
import { RemoteConroller } from "./RemoteConroller";
import { TV, TVOffCommand, TVOnCommand } from "./TV";

var livingRoomLight = new Light('living room');
var livingRoomLightOn = new LightOnCommand(livingRoomLight);
var livingRoomLightOff = new LightOffCommand(livingRoomLight);

var kitchenLight = new Light('kitchen');
var kitchenLightOn = new LightOnCommand(kitchenLight);
var kitchenLightOff = new LightOffCommand(kitchenLight);

var tv = new TV();
var tvOn = new TVOnCommand(tv);
var tvOff = new TVOffCommand(tv);

var remoteConroller = new RemoteConroller(3);
remoteConroller.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remoteConroller.setCommand(1, kitchenLightOn, kitchenLightOff);
remoteConroller.setCommand(2, tvOn, tvOff);


remoteConroller.onButtonPushed(0);
remoteConroller.redoButtonPushed();
remoteConroller.redoButtonPushed();
remoteConroller.undoButtonPushed();
remoteConroller.undoButtonPushed();

remoteConroller.offButtonPushed(0);
remoteConroller.onButtonPushed(1);
remoteConroller.undoButtonPushed();
remoteConroller.onButtonPushed(2);
remoteConroller.offButtonPushed(2);
remoteConroller.redoButtonPushed();
