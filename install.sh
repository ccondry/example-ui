#!/bin/sh
echo "running yarn"
yarn
if [ $? -eq 0 ]; then
  echo "running yarn build..."
  yarn build
  while [ $? != 0 ]
  do
    echo "failed to build example-ui website files. trying again..."
    yarn build
  done
  echo "yarn build successful. copying dist files to www folder..."
  mkdir -p /var/www/html/example-ui
  cp -rf dist/* /var/www/html/example-ui/
  if [ $? -eq 0 ]; then
    echo "successfully installed example-ui website files"
  else
    echo "failed to install example-ui website files"
  fi
else
  echo "yarn failed"
fi
