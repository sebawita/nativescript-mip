import app = require("application");

declare var com: any;
var MipRobotSound = com.wowwee.bluetoothrobotcontrollib.MipRobotSound;
var MipCommandValues = com.wowwee.bluetoothrobotcontrollib.MipCommandValues;

export class Mip{
    mip: any;

    constructor(nativeMip: any) {
        this.mip = nativeMip;
    }

    get name(): string {
      return this.mip.getName();
    }
    set name(value: string) {
      this.mip.setName(value);
    }

    get volume(): number {
      return this.mip.mipVolume;
    }
    set volume(value: number) {
      this.mip.setMipVolumeLevel(value);
    }

    connect() {
        this.mip.connect(app.android.context);
    }

    /**
     * Sends a signal to move for 50ms
     * @param turn right [0 to 1], left [0 to -1]
     * @param direction fwd [0 to 1], bwd [0 to -1]
     */
    drive(turn: number, direction: number) {
      this.mip.mipDrive([turn, direction]);
    }

    driveForwardForMilliseconds(speed: number, time: number) {
      this.mip.mipDriveForwardForMilliseconds(speed, time);
    }

    driveBackwardForMilliseconds(speed: number, time: number) {
      this.mip.mipDriveBackwardForMilliseconds(speed, time);
    }

    driveDistanceByCm(distance: number, angle: number) {
      this.mip.mipDriveDistanceByCm(distance, angle);
    }

    falloverWithStyle(direction) {
      if(direction === 0)
        this.mip.mipFalloverWithStyle(MipCommandValues.kMipPositionOnBack);
      else
        this.mip.mipFalloverWithStyle(MipCommandValues.kMipPositionFaceDown);
    }

    ping() {
      this.mip.mipPing();
    }

    playSound(mipRobotSound) {
      this.mip.mipPlaySound(MipRobotSound.create(MipCommandValues.kMipSoundFile_MIP_IN_LOVE));
    }

    punchLeftWithSpeed(speed) {
      this.mip.mipPunchLeftWithSpeed(speed);
    }

    punchRightWithSpeed(speed) {
      this.mip.mipPunchRightWithSpeed(speed);
    }

    turnLeftByDegrees(angle: number, speed: number) {
      this.mip.mipTurnLeftByDegrees(angle, speed);
    }

    turnRightByDegrees(angle: number, speed: number) {
      this.mip.mipTurnRightByDegrees(angle, speed);
    }

    setChestRGBLedFlashingWithColor(red: number, green: number, blue: number, timeOn: number, timeOff: number) {
      this.mip.setMipChestRGBLedFlashingWithColor(red, green, blue, timeOn, timeOff);
    }

    setChestRGBLedWithColor(red: number, green: number, blue: number, x) {
      this.mip.setMipChestRGBLedWithColor(red, green, blue, 1);
    }

    setHeadLeds(led1, led2, led3, led4 ) {
      this.mip.setMipHeadLeds(
        this.convertToHeadLightValue(led1),
        this.convertToHeadLightValue(led2),
        this.convertToHeadLightValue(led3),
        this.convertToHeadLightValue(led4)
      );
    }

    convertToHeadLightValue(val) {
      switch(val) {
        case 0:
          return MipCommandValues.kMipHeadLedValue.kMipHeadLed_Off;
        case 1: 
          return MipCommandValues.kMipHeadLedValue.kMipHeadLed_On;
        case 2: 
          return MipCommandValues.kMipHeadLedValue.kMipHeadLed_BlinkSlow;
        case 3: 
          return MipCommandValues.kMipHeadLedValue.kMipHeadLed_BlinkFast;
        default: 
          return MipCommandValues.kMipHeadLedValue.kMipHeadLed_On;
      }
    }

    initDefaultValues() {
      this.mip.initDefaultValues();
    }


    // getActivationStatus() {
    //   return this.mip.getMipActivationStatus();
    // }

    // rebootWriteFlash(boolean, boolean) {
    //   this.mip.mipRebootWriteFlash(boolean, boolean);
    // }

    // transmitIRGameDataWithGameType(byte, byte, short, byte) {
    //   this.mip.mipTransmitIRGameDataWithGameType(byte, byte, short, byte);
    // }

    // transmitIRMipCommandOfBitLength(byte, byte, byte, byte, byte, byte) {
    //   this.mip.mipTransmitIRMipCommandOfBitLength(byte, byte, byte, byte, byte, byte);
    // }


    // readMipFirmwareVersion() {
    //   return this.mip.readMipFirmwareVersion();
    // }

    // readMipHardwareVersion() {
    //   return this.mip.readMipHardwareVersion();
    // }

    // readMipSensorWeightLevel() {
    //   return this.mip.readMipSensorWeightLevel();
    // }

    // readMipStatus() {
    //   return this.mip.readMipStatus();
    // }
}


    
