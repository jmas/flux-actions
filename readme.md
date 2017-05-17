# Flux Actions

Basic class that wrap flux actions.

## How to use

```js
import Actions from 'flux-actions';
import http from 'fetch-to-request';
import * as actionTypes from './actions-types/users';

class UsersActions extends Actions {
    show(userId) {
        this.dispatch(actionTypes.SHOW, { userId });
    }
    
    loadOne(userId) {
        this.dispatchPromise(http.get('/users/' + userId), {
            request: actionTypes.LOAD,
            request: actionTypes.LOAD_SUCCESS,
            request: actionTypes.LOAD_FAIL
        }, { userId });
    }
}
```

then when you need call the actions:
```js
import {Dispatcher} from 'flux';
import UsersActions from './actions/UsersActions';

const dispatcher = new Dispatcher();
const usersActions = new UsersActions(dispatcher);

usersActions.show(1);
usersActions.loadOne(1);
```

## Methods

### `constructor(dispatcher)`

Please pass instance of flux `Dispatcher` here.

* `dispatcher` - `Dispatcher` instance of flux `Dispatcher`

### `dispatch(type, payload)`

Dispatch simple action.

* `type` - `string` action type
* `payload` - `object` a payload object

### `dispatchPromise(promise, types, payload)`

Dispatch promise. When `dispatchPromise()` is called it put
`types.request` action. When promise success it put `types.success`
action. And when fail - `types.fail` action.

* `promise` - `Promise` instance of Promise
* `types` - `{ request, success, fail }` object with list of types request/success/fail
* `payload` - `object` a payload object
