
import bluetooth = require("nativescript-bluetooth");

export class BLEUtils {

    constructor() {
    }

    public isBluetoothEnabled(): Promise<boolean> {
        return bluetooth.isBluetoothEnabled();
    }

    public initialisePermissionsIfRequired() {
        this.hasPermissions()
            .then( granted => {
                if(granted == false) {
                    console.log("Requesting permissions");
                    this.requestPermissions();
                }
            })
    }

    private hasPermissions(): Promise<boolean> {
        return bluetooth.hasCoarseLocationPermission();
    }

    private requestPermissions() {
        bluetooth.requestCoarseLocationPermission().then(
            function() {
                console.log("Location permission requested");
            }
        );
    }
}