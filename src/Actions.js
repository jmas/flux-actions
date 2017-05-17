export default class Actions {
    constructor(dispatcher) {
        this._dispatcher = dispatcher;
    }

    dispatch(type, payload={}) {
        this._dispatcher.dispatch({
            type,
            payload
        });
    }

    dispatchPromise(promise, {request, success, fail}, payload={}) {
        this.dispatch(request, payload);
        promise.then(
            data => this.dispatch(success, {data, payload}),
            data => this.dispatch(fail, {data, payload}),
        );
    }
}
