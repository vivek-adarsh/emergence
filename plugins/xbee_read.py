from digi.xbee.devices import XBeeDevice
from hexdump import hexdump
import time, sys

xbee_port = "/dev/ttyUSB0"
baud_rate = 9600
logfile   = "/home/pi/logfile.log"

device    = XBeeDevice(xbee_port, baud_rate)

if len(sys.argv) < 2:
    filename = logfile
else:
    filename = sys.argv[1]

def log(xbee_msg, rssi):

    lf = open(filename, "a")
    print()

    lf.write("{}, {}, {}\n".format(time.time(),xbee_msg.data.decode(), rssi.decode()))
    lf.flush()

    # DEBUG
    print("Received: {}\nFrom: {}".format(data, remote_device))
    hexdump(data)
    print("RSSI: {}".format(rssi))
    hexdump(rssi)
    print("\n")

    lf.close()

def main():
    device.open()



    print("Starting Xbee Scan. Saving to %s"%filename)
    while True:
        try:
            # Returns an object
            # .remote_device
            # .data
            # .is_broadcast
            # .timestamp
            xbee_msg = device.read_data()
            if (xbee_msg):
                remote_device = xbee_msg.remote_device
                data          = xbee_msg.data

                # Returns rssi info in -dBm
                rssi = device.get_parameter("DB")

                log(xbee_msg, rssi)


        except KeyboardInterrupt:
            break

    device.close()


if __name__ == "__main__":
    main()
