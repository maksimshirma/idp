import { Command } from "./Command";

export class RemoteConroller {
  private onCommands: Command[];
  private offCommands: Command[];
  private commands: Command[];
  private index: number;
  private maxStackSize = 5;

  constructor(commandsSize: number) {
    this.onCommands = new Array(commandsSize);
    this.offCommands = new Array(commandsSize);
    this.commands = [];
    this.index = -1;
  }

  setCommand(slot: number, onCommand: Command, offCommmand: Command){
		this.onCommands[slot] = onCommand;
		this.offCommands[slot] = offCommmand;
	}

  private pushToCommands(command: Command) {
    if (this.commands.length === this.maxStackSize) {
      this.commands.unshift();
    }
    this.commands.push(command);
    this.index = this.commands.length - 1;
  }

  onButtonPushed(slot: number) {
    this.onCommands[slot].execute();
    this.pushToCommands(this.onCommands[slot]);
  }

  offButtonPushed(slot: number) {
    this.offCommands[slot].execute();
    this.pushToCommands(this.offCommands[slot]);
  }

  undoButtonPushed() {
    if (this.index === -1) {
      console.log('Ошибка')
      return;
    };
    if (this.index === this.commands.length) this.index--;
    this.commands[this.index].unexecute();
    this.index--;
  }

  redoButtonPushed() {
    if (this.index === this.commands.length) {
      console.log('Ошибка')
      return;
    };
    if (this.index === -1) this.index++;
    this.commands[this.index].execute();
    this.index++;
  }
}