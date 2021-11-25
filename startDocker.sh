#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(dockerImageName.sh)
port=$(grep '^ENV SERVER_PORT' Dockerfile | awk -F= '{ print $2 }')

containerName=yahtzee

docker stop $containerName
docker rm $containerName

docker run --name $containerName -d -p 8880:$port --user $(id -u):$(id -g) $imageName:$version
