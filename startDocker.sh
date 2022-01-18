#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(dockerImageName.sh)
port=$(grep '^ENV SERVER_PORT' Dockerfile | awk -F= '{ print $2 }')

containerName=yahtzee

docker stop $containerName
docker rm $containerName

mongoUser=myUser
mongoPass=$(pass Database/mongo/atlas/$mongoUser | head -1)

docker run --name $containerName -d -p 8880:$port --user $(id -u):$(id -g) -e MONGO_DB_USER=$mongoUser -e MONGO_DB_PASS="$mongoPass" $imageName:$version

