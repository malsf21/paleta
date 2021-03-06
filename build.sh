#!/bin/bash

# A small script to "compile" all the work for the website. This is the production build.

cd ${0%/*} # Go to this directory
rm -rf css/bootstrap/_custom.scss
cp css/custom.scss css/bootstrap/_custom.scss
sass css/bootstrap/bootstrap.scss --style compressed > css/bootstrap.min.css # Sass -> CSS
jekyll build # Build the site in the _site directory
