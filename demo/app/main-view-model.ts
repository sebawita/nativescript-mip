import {Observable} from 'data/observable';
import {MipController} from 'nativescript-mip';

export class HelloWorldModel extends Observable {
  public message: string;
  private mipController: MipController;

  constructor() {
    super();

    this.mipController = new MipController();
    this.message = this.mipController.message;
  }
}