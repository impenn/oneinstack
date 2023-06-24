#!/bin/bash
/bin/cp ../init.d/gmqtt.service /lib/systemd/system/
systemctl enable gmqtt
#sysctl -p
systemctl start gmqtt