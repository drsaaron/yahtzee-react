#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(dockerImageName.sh)

containerName=yahtzee

docker stop $containerName
docker rm $containerName

docker run --name $containerName -d -p 8880:5000 --user $(id -u):$(id -g) $imageName:$version

