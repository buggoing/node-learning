#!/bin/bash
pid=$1
pname=$(top -n 1 -p $pid |awk '{print $13}'|tail -3|head -1)
msg="memory usage log for pid:"$pid" pname:"$pname
logf=mem_$pname".log"
if [ -f ${logf} ]; then
    mv ${logf} ${logf}.bak
fi
echo $msg
echo $msg >> ${logf}
interval=30
while(true)
do
 t=$(date|awk '{print $4}')
 m=$(cat /proc/$pid/status|grep -e VmRSS)
 echo $t"    "$m
 echo $t"    "$m >> ${logf}
 sleep $interval
done
