#!/bin/sh
sed '1,8d' $1 | kramdown > temp.html~
cat {temp,script}.html~ > tempmj.html~
