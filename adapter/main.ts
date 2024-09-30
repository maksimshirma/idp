import { Watch } from "./Watch";
import { DigitalWatch, WatchAdapter } from "./WathAdapter";


var watch = new Watch(135, 96, 90);

var watchAdapter = new WatchAdapter(watch);

watchAdapter.displayTime();

var digitalWatch = new DigitalWatch('8:25:47');

digitalWatch.displayTime();
