import { Mip } from './mip';
export declare class MipFinder {
    private bleUtils;
    private instance;
    constructor();
    getBluetoothAdapter(): any;
    getPermissions(): void;
    getMipsFoundList(): Array<Mip>;
    clearFoundMipList(): void;
    getMipsConnected(): Array<Mip>;
    scanForMips(): void;
    stopScanForMips(): void;
}
