#! /bin/sh

npm update #--force

# if the lock file is updated, update the version
if gitFileChanged.sh -f package-lock.json
then
    echo "lock file upgraded, so update version"
    git add . # need to commit locally before running npm version patch
    git commit -m 'patch'
    npm version patch
else
    echo "lock file unchanged so no version update"
    exit 1
fi


