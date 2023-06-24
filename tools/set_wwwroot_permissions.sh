#!/bin/bash
#echo "set wwwroot permissions"
chown -R www.www /data/wwwroot/
find /data/wwwroot/ -type d -exec chmod 755 {} \;
find /data/wwwroot/ -type f -exec chmod 644 {} \;