#! /bin/sh

yarn upgrade

# if the lock file is updated, update the version
if ! git diff-index --quiet HEAD yarn.lock
then
    echo "lock file upgraded, so update version"
    yarn version --patch
else
    echo "lock file unchanged so no version update"
    exit 1
fi


