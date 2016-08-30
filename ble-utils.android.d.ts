export declare class BLEUtils {
    constructor();
    isBluetoothEnabled(): Promise<boolean>;
    initialisePermissionsIfRequired(): void;
    private hasPermissions();
    private requestPermissions();
}
