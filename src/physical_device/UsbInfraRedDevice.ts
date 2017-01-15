export class UsbInfraRedDevice {

    private device_path:string

    public setDevicePath(device_path: string){
        this.device_path = device_path
    }

    public sendIrMessage(ir_message: string) {
        // echo "Message test">/dev/ttyACM0
        // echo $((16#FF00FF88)) > /dev/ttyACM0
        let cmd = 'echo ""' + ir_message + '"" > ' + this.device_path
        console.log(cmd)
    }

}
