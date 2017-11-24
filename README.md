# Module Healthcheck

This module help to build your healthcheck endpoint

## Install

To install it in your project, think to fix the version using this kind of command :

```
yarn add Ogury/module-healthcheck#v1.X.X
```

## Usage

You can create the endpoint this way :

```javascript
import healthController, {addToHealthCheck} from 'module-healthcheck';

const app = express();

addToHealthCheck(someGetStatus);
addToHealthCheck(someOtherGetStatus);
addToHealthCheck(someOtherAgainGetStatus);
app.use('/health', healthController);
app.use('/', controllers);

app.listen(3000);
```

**Note:** The "someGetStatus" fonctions references have to return a Promise

# Work on it

## Quickstart

```
yarn install
yarn build
```

## Tests

```
yarn test
```