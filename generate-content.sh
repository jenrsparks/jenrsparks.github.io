#!/bin/bash

pelican content -o output -s publishconf.py
ghp-import -m "Generate Pelican site" --no-jekyll -b content output

