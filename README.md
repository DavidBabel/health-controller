# Health Middleware

This module help to build your healthcheck endpoint

## Warning

To run `npm install` or `yarn install` in your project with this module in it you need to store your key in a ssh-agent or in your MacOs Keychain : https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/

## Install

To install it in your project, think to fix the version using this kind of command :

```
yarn add Ogury/health-controller#v1.X.X
```

## Usage

You can create the endpoint this way :

```javascript
import healthController, {addHealthCheck} from 'health-controller';

const app = express();

addHealthCheck(someGetStatus);
addHealthCheck(someOtherGetStatus);
addHealthCheck(someOtherAgainGetStatus);
app.use('/health', healthController);
app.use('/', controllers);

app.listen(3000);
```

**Note:** The "someGetStatus" fonctions references have to return a Promise

## Contribute

### Quickstart

```
yarn install
yarn build
```

### Tests

```
yarn test
```