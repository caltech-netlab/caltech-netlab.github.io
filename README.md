# netlab-website

This repository contains the Ember source code for [netlab website](http://netlab.caltech.edu).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd netlab`
* `npm install -g ember-cli`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Running Tests

To ensure best practice in coding style, you should always run the following command before pushing to the repository:

* `ember test`

### Deploying

To build and deploy the website, use the `deploy/deploy-to-cms.sh` script. You should make sure `USERNAME` and `PASSWORD` are defined in your environment variables, where `USERNAME` is the user name you use to log into `login.cms.caltech.edu`, and `PASSWORD` is the associated password. Also make sure [sshpass](https://sourceforge.net/projects/sshpass/) is installed in your machine before running the script.

## Standard workflow
Steps to update the website:
- [Make changes] Go to GitHub folder /netlab, modify files (some useful and frequently used .js files are described below)
- [Check out the changes] Test the changes using <ember serve> 
  - Type `ember serve` in the terminal
  - Open <http://localhost:4200/> in a browser, and check out the changes
- [Deploy the Web] 
  - `cd deploy`
  - If connecting for the first time, `ssh <name>@login.cms.caltech.edu` to add fingerprint, otherwise you'll get `Host key verification failed`
  - Set environment variables `export MYNAME="cms username"; export PASSWORD="cms password"`
  - `./deploy-to-cms.sh` (VPN connection is required) 
  - If succeed, you will be seeing popped up info: 
```
    [INFO] Preparing uploading dependencies...
    [INFO] Uploading index.html...
    [INFO] Done
```
- [Push to Github]

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* Useful ember commands: https://cli.emberjs.com/release/basic-use/cli-commands/
* Useful `.js` files in `app/controllers/`:
  * `people.js` (change people info)
  * `presentation.js` (change presentation info)

## Styling

### Tools

* [getbootstrap](http://getbootstrap.com/) (Currently 4.0.0-beta)
* [Sass](http://sass-lang.com/)

### Images

#### Research Images

* Preferably 600x800 or larger.
