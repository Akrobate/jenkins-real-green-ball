declare var require: any
var cmd = require('node-cmd')

export class UsbInfraRedDevice {

    private device_path:string

    public setDevicePath(device_path: string){
        this.device_path = device_path
    }

    public sendIrMessage(ir_message: string) {
        // echo "Message test">/dev/ttyACM0
        // echo $((16#FF00FF88)) > /dev/ttyACM0
        // echo $((16#FFF807)) > /dev/ttyACM0
        let cmd = 'echo $((16#' + ir_message + ')) > ' + this.device_path
        this.executeCmd(cmd)
        console.log(cmd)
    }

    public executeCmd(cmd_string: string) {
        cmd.run(cmd_string)
        /*
        cmd.run(cmd_string, function(data: any){
            console.log('the current working dir is : ', data)
        });*/
    }


}
