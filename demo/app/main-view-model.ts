import {Observable} from 'data/observable';

//import {MipFinder} from './plugin/mip-finder';
//import {Mip} from './plugin/mip';
import {MipFinder} from 'nativescript-mip/mip-finder';
import {Mip} from 'nativescript-mip';


export class HelloWorldModel extends Observable {
  public message: string;
  
  private mipFinder: MipFinder;

  private mip: Mip;

  constructor() {
    super();
    
    this.mipFinder = new MipFinder();
  }

  getPermissions() {
    this.mipFinder.getPermissions();
  }

  getMipsFoundList() {
        var mips: Array<Mip> = this.mipFinder.getMipsFoundList();
        console.log("getMipsFoundList");

        mips.forEach(mip => {
          console.log("mip found: " + mip.name);
        });
    }

    connect() {
      var mips: Array<Mip> = this.mipFinder.getMipsFoundList();
      if(mips.length > 0) {
        console.log("connecting...");
        this.mip = mips[0];
        this.mip.connect();
      }
    }

    clearFoundMipList() {
        this.mipFinder.clearFoundMipList();
        console.log("getMipsFoundList");
    }

    getMipsConnected() {
        var connectedMips: Array<Mip> = this.mipFinder.getMipsConnected();
        console.log("getMipsConnected count:" + connectedMips.length);
    }

    scanForMips() {
        this.mipFinder.scanForMips();
        console.log("scanForMips");
    }

    stopScanForMips() {
        this.mipFinder.stopScanForMips();
        console.log("stopScanForMips");
    }

    turn: number = 0.2;
    direction: number = 0.8;

    mipDriveTest() {
      var counter = 20;

      var loop = setInterval( () => {
            this.mip.drive(this.turn, this.direction);

            if(counter-- < 0) {
              clearInterval(loop);
            }
        }, 50);
    }

    

}