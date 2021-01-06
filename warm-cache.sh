#!/usr/bin/env sh

mkdir -p tmp
cd tmp
wget -i ../public/urls.txt
cd ..
rm -r tmp
