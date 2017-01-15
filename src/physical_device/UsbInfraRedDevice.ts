export class UsbInfraRedDevice {

    private device_path:string

    public setDevicePath(device_path: string){
        this.device_path = device_path
    }

    public sendIrMessage(ir_message: string) {
        let cmd = 'echo ' + ir_message + ' >> ' + this.device_path
        console.log(cmd)
    }

}
