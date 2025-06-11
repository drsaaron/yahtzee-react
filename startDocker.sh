#! /bin/sh

version=$(getPackageJsonAttribute.sh version)
imageName=$(dockerImageName.sh)
port=$(grep '^ENV SERVER_PORT' Dockerfile | awk -F= '{ print $2 }')

containerName=yahtzee

docker stop $containerName
docker rm $containerName

# build the mongo DB URL
mongoUser=myUser
mongoPass=$(pass Database/mongo/atlas/$mongoUser | head -1)
mongoServer=$(pass Database/mongo/atlas/$mongoUser | tail -1 | awk -F/ '{ print $3 }')
SCORE_DB_URL="mongodb+srv://$mongoUser:$mongoPass@$mongoServer/yahtzee"

docker run --network qotd --user $(id -u):$(id -g) --name $containerName -d -p 8880:$port -e SCORE_DB_URL="$SCORE_DB_URL" $imageName:$version

