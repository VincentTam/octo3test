#!/usr/bin/env ruby
# encoding: utf-8

input = IO.read(ARGV[0])
RegexMap = {
    /\<div\ class="caption"\>Click the image for a larger view.\<\/div\>/ => '',
    /\<div\ id="image-dialog-\d+".*?\>.+?\<\/div\>/m => '',
    /\<div\ class="illustration\ print"\>.+?\<\/div\>/m => '',
}
RegexMap.each_pair {|k,v| input.gsub!(k, v)}
puts input
