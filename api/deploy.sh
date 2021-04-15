#!/bin/bash
PID=$(ps -ef | grep 'node api.js' | grep -v grep | awk '{print \$2}')
if [[ ${PID} -eq "" ]]
then
    echo "none"
else
    kill -9 ${PID}    
fi
cd /home/jenkins/deploy
node api.js > /dev/null 2> /dev/null < /dev/null &