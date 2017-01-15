#!/bin/bash
for f in $(ls *.png) ; do
    newf=`echo $f | sed 's/temp_//'`
    echo $f $newf
    cp -v $f ~/octopress/source/images/posts/UseGooCache/$newf
done
