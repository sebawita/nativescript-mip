import {BLEUtils} from './ble-utils';

import app = require("application");
import utils = require("utils/utils");

import {Mip} from './mip';

declare var com: any;
declare var android: any;

var MipRobotFinder = com.wowwee.bluetoothrobotcontrollib.sdk.MipRobotFinder;

export class MipFinder {

    private bleUtils: BLEUtils = new BLEUtils();

    private get instance() {
        return MipRobotFinder.getInstance();
    }

    constructor() {
        var adapter = this.getBluetoothAdapter();

        this.instance.setBluetoothAdapter(adapter);
        this.instance.setApplicationContext(app.android.context);

        this.bleUtils.initialisePermissionsIfRequired();
    }

    getBluetoothAdapter() {
        var bluetoothManager = utils.ad.getApplicationContext().getSystemService(android.content.Context.BLUETOOTH_SERVICE);
        return bluetoothManager.getAdapter();
    }

    getPermissions() {
        this.bleUtils.initialisePermissionsIfRequired();
    }

    getMipsFoundList() : Array<Mip> {
        var nativeMips = this.instance.getMipsFoundList();

        var mips = [];

        for (var i = 0; i < nativeMips.size(); i++) {
            var nativeMip = nativeMips.get(i);
            var mip = new Mip(nativeMip);
            mips.push(mip);
        }

        return mips;
    }

    clearFoundMipList() {
        this.instance.clearFoundMipList();
    }

    getMipsConnected() : Array<Mip> {
        var nativeMips = this.instance.getMipsConnected();

        var mips = [];

        for (var i = 0; i < nativeMips.size(); i++) {
            var nativeMip = nativeMips.get(i);
            var mip = new Mip(nativeMip);
            mips.push(mip);
        }

        return mips;
    }

    scanForMips() {
        this.instance.scanForMips();
    }

    stopScanForMips() {
        this.instance.stopScanForMips();
    }



    // mipRebootWriteFlash(boolean, boolean) {
    //   this.mip.mipRebootWriteFlash(boolean, boolean);
    // }

    // mipTransmitIRGameDataWithGameType(byte, byte, short, byte) {
    //   this.mip.mipTransmitIRGameDataWithGameType(byte, byte, short, byte);
    // }

    // mipTransmitIRMipCommandOfBitLength(byte, byte, byte, byte, byte, byte) {
    //   this.mip.mipTransmitIRMipCommandOfBitLength(byte, byte, byte, byte, byte, byte);
    // }

    // peripheralDidBecomeReady() {
    //   this.mip.peripheralDidBecomeReady();
    // }

    // peripheralDidConnect() {
    //   this.mip.peripheralDidConnect();
    // }

    // peripheralDidDisconnect() {
    //   this.mip.peripheralDidDisconnect();
    // }

    // setCallbackInterface(interface com.wowwee.bluetoothrobotcontrollib.sdk.MipRobot$MipRobotInterface) {
    //   this.mip.setCallbackInterface(interface com.wowwee.bluetoothrobotcontrollib.sdk.MipRobot$MipRobotInterface);
    // }    

}