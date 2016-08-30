export declare class Mip {
    mip: any;
    constructor(nativeMip: any);
    name: string;
    volume: number;
    connect(): void;
    /**
     * Sends a signal to move for 50ms
     * @param turn right [0 to 1], left [0 to -1]
     * @param direction fwd [0 to 1], bwd [0 to -1]
     */
    drive(turn: number, direction: number): void;
    driveForwardForMilliseconds(speed: number, time: number): void;
    driveBackwardForMilliseconds(speed: number, time: number): void;
    driveDistanceByCm(distance: number, angle: number): void;
    falloverWithStyle(direction: any): void;
    ping(): void;
    playSound(mipRobotSound: any): void;
    punchLeftWithSpeed(speed: any): void;
    punchRightWithSpeed(speed: any): void;
    turnLeftByDegrees(angle: number, speed: number): void;
    turnRightByDegrees(angle: number, speed: number): void;
    setChestRGBLedFlashingWithColor(red: number, green: number, blue: number, timeOn: number, timeOff: number): void;
    setChestRGBLedWithColor(red: number, green: number, blue: number, x: any): void;
    setHeadLeds(led1: any, led2: any, led3: any, led4: any): void;
    convertToHeadLightValue(val: any): any;
    initDefaultValues(): void;
}
