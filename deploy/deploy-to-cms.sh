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
sshpass -p ${PASSWORD} scp -r ./dist/* ${USERNAME}@login.cms.caltech.edu:/cs/networks/netlab/
mv ./index.html ./dist

echo '[INFO] Uploading index.html...'
# REDIRECTS contains all relative URLS (w.r.t netlab.caltech.edu) that need to redirect back to the netlab main index.html page.
# This will ensure the URLs redirect properly under the CMS DNS service

REDIRECTS=("" "research/" "research/power-systems-steady-state/" "research/power-systems-dynamics/" \
  "research/electric-vehicles/" "research/communication-networks/" "people/" \
  "publications/" "presentations/" "acknowledgement/" "staging/")

for path in "${REDIRECTS[@]}"
do
  sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu "mkdir -p /cs/networks/netlab/${path}"
  sshpass -p ${PASSWORD} scp -r ./dist/index.html ${USERNAME}@login.cms.caltech.edu:/cs/networks/netlab/${path}index.html
done

echo '[INFO] Updating file group and permissions...'
for path in "${REDIRECTS[@]}"
do
  sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu "chgrp networks /cs/networks/netlab/${path}index.html"
  sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu "chmod -R g+w /cs/networks/netlab/${path}index.html"

  if [ "$path" != "" ]; then
    sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu "chgrp networks /cs/networks/netlab/${path}"
    sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu "chmod -R g+w /cs/networks/netlab/${path}"
  fi
done

sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chgrp networks /cs/networks/netlab/crossdomain.xml'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chmod g+w /cs/networks/netlab/crossdomain.xml'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chgrp -R networks /cs/networks/netlab/assets'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chmod -R g+w /cs/networks/netlab/assets'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chgrp -R networks /cs/networks/netlab/fonts'
sshpass -p ${PASSWORD} ssh ${USERNAME}@login.cms.caltech.edu 'chmod -R g+w /cs/networks/netlab/fonts'

echo '[INFO] Done'
