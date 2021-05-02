#!/bin/sh
# This is a comment!
adb disconnect 
myip=$(ipconfig getifaddr en0)

file=$(find android/app/src/main/java/ -name MainActivity.java)
lineNum=$(grep -n debug_http_host $file | cut -d : -f 1)
if [[ $lineNum == '' ]]
then
funcline=$(grep -n MainActivity $file | cut -d : -f 1)
incr=1
funcline=$(expr $funcline + $incr)
addfunc=$'@Override\nprotected void onCreate(Bundle state){\nsuper.onCreate(state);\n\nSharedPreferences preferences =\nPreferenceManager.getDefaultSharedPreferences(getApplicationContext());\npreferences.edit().putString("debug_http_host", "192.168.10.7:8081").apply();\n}' 
perl -pi -e "s//$addfunc/ if $. == $funcline" $file

importline=$(grep -n package $file | cut -d : -f 1)
incr=1
importline=$(expr $importline + $incr)
addimport=$'\nimport android.content.SharedPreferences;\nimport android.os.Bundle;\nimport android.preference.PreferenceManager;\n'
perl -pi -e "s//$addimport/ if $. == $importline" $file

lineNum=$(grep -n debug_http_host $file | cut -d : -f 1)  
fi
replaceTxt='preferences.edit().putString("debug_http_host", "'$myip':8081").apply();'
sed -i '' "$lineNum s/.*/$replaceTxt/" $file   


ipg=$(netstat -nr | grep 'default' )
getip="$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' <<< "$ipg")"

if [[ $getip != '' ]]
then
failed=$(adb connect $getip:5555 | grep 'failed' )
else
	failed='neverfail'
fi
if [[ $failed == '' ]]
	then
		adb connect $getip:5555
		echo "🚀🚀 🤖 woohoo! succefully connected bro ✅ 🚀🚀"
else
scanip="$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' <<< "$myip").0/24"
nmap -sP $scanip
mac=$(grep ':' scripts/mac.txt)
f=$(arp -a | grep "$mac")
ip="$(grep -oE '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' <<< "$f")"
if [[ $mac == '' ]]
then
 echo "\n\n🛑 failed to connect to any device!!!\n\n🚀🚀 🤖 create a file named mac.txt and add your device mac address 🚀🚀\n\n"
elif [[ $ip != '' ]]
then
 adb connect $ip:5555
 echo "\n\n🚀🚀 🤖 woohoo! succefully connected bro ✅ 🚀🚀\n\n"
else 
	echo "\n\n🛑 BRO!!!🤖 CONNECT TO ANY NETWORK FIRST 🤖\n\n"
fi
fi