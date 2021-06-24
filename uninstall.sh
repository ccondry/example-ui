#!/bin/sh
echo "removing example-ui website files..."
rm -rf /var/www/html/example-ui/*
if [ $? -eq 0 ]; then
  echo "successfully removed example-ui website files."
else
  echo "failed to remove example-ui website files."
fi
