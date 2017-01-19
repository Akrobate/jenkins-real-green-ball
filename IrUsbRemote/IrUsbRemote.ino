/**
 *  Simple USB to Nec Usb remote for Teensy 2++
 *  Should work on any arduino like board, 
 *  just check te IR pin  
 *
 *  IR Led must be plugged on pin 1
 *
 */

#include <IRremote.h>

// Prototypes de fonction
String serialReadString();
void sendCode(unsigned long code);
  
// Infrared driver   
IRsend irsend;

// Temporary vars
char incomingByte;  
unsigned long code_long = 0;
String code_string;


/**
 *  Setup
 *
 */
 
void setup() {
    Serial.begin(9600);
}


/**
 *  Main loop
 *
 */
 
void loop() {
    code_string = serialReadString();
    char buffer[100];
    code_string.toCharArray(buffer, 100);
    code_long = atol(buffer);
    if (code_long != 0) {
        sendCode(code_long);
    }
}


/**
 *  Reads the string message from 
 *  serial
 *  @return String  Recieved on serial string
 *
 */

String serialReadString() {
    String tmpl="";
    while (Serial.available()) {
        incomingByte = Serial.read();
        tmpl = tmpl + char(incomingByte);
    }
    return tmpl.trim();
}


/**
 *  Sends code to IR Led
 *  using NEC Protocol
 *
 */

void sendCode(unsigned long code) {
    for (int i = 0; i < 3; i++) {
        irsend.sendNEC(code, 32); 
        delay(50);
    }  
}

