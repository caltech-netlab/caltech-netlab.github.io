#! /bin/bash
#
# DESCRIPTION: Deploy the sites to CMS server

usage() {
  echo "Please ensure you have defined USERNAME=<username> and PASSWORD=<password> in you environment variables"
  echo " <username> is your CMS account at login.cms.caltech.edu"
  echo " <password> is your CMS account password"
  exit 1
}

if [[ -z "${PASSWORD}" ]] ; then
  usage
fi

if [[ -z "${USERNAME}" ]] ; then
  usage
fi

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

echo ${DIR}

cd ${DIR}/..

echo '[INFO] Building from sources...'
ember build -e production

echo '[INFO] Preparing uploading dependencies...'
mv ./dist/index.html .
sshpass -p ${PASSWORD} scp -r ./dist/* ${USERNAME}@login.cms.caltech.edu:/cs/networks/netlab/staging/
# This asset copy fixes relative path error. Remove after staging becomes live
sshpass -p ${PASSWORD} scp -r ./dist/assets/* ${USERNAME}@login.cms.caltech.edu:/cs/networks/netlab/assets/
mv ./index.html ./dist

echo '[INFO] Uploading index.html...'
sshpass -p ${PASSWORD} scp -r ./dist/index.html ${USERNAME}@login.cms.caltech.edu:/cs/networks/netlab/staging

echo '[INFO] Updating file group and permissions...'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chgrp -R networks /cs/networks/netlab/staging'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chgrp -R networks /cs/networks/netlab/assets'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chmod -R g+w /cs/networks/netlab/staging'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chmod -R g+w /cs/networks/netlab/assets'

echo '[INFO] Done'
