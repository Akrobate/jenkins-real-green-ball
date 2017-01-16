#!/bin/sh

# param $1 [Light command to send]
# param $2 [IR device to command]
#
#usage1:  sh ./ir_lights_commander.sh FFB04F /dev/ttyACM0
#usage2:  sh ./ir_lights_commander.sh FFF807 /dev/ttyACM0

#command="FFB04F";
command=$1;
device=$2;

intvalue=$(echo "ibase=16; $command"|bc);
echo $intvalue;
echo $intvalue > $device;
