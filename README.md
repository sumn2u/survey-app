# Survey-app [![Build Status](https://travis-ci.org/sumn2u/survey-app.svg?branch=master)](https://travis-ci.org/sumn2u/survey-app)


Survey app challenge.

## Prerequisites
You will need the following things properly installed on your laptop/pc.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)


## Installing Nodejs via `nvm` [docs](https://github.com/creationix/nvm)
* **Install Script**
-`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash` 
- or `wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash`
* **Load nvm**
-`export NVM_DIR="$HOME/.nvm"`
- `[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"`
* **Verify Installation**
- `command -v nvm`
- `nvm -v`
* **Download latest node**
- `nvm install node`
* **Use Node**
- `nvm use node`

## Installation

* `git clone <repository-url>` this repository
*  change into the new directory
* `npm install`


## Running / Development

* `npm start`
* Visit your app at [http://localhost:3000](http://localhost:3000).


### Running Tests

* `npm run test:dev`

### Building

* ` npm run build` (production)

### Deploying

* `yarn run deploy` 


## Further Reading / Useful Links

* [reactjs.js](https://reactjs.org/docs/hello-world.html)
* [react-testing-library](https://github.com/kentcdodds/react-testing-library)
* Development Browser Extensions
  * [redux dev-tools chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  * [react-developer-tools for chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

