export default class Actions {
    /**
     * @param {Dispatcher} dispatcher - instance of flux `Dispatcher`
     */
    constructor(dispatcher) {
        this._dispatcher = dispatcher;
    }

    /**
     * @param {string} type - action type
     * @param {object} payload - a payload object
     */
    dispatch(type, payload={}) {
        this._dispatcher.dispatch({
            type,
            payload
        });
    }

    /**
     * @param {Promise} promise - instance of Promise
     * @param {request, success, fail} types - object with list of types request/success/fail
     * @param {object} payload - a payload object
     */
    dispatchPromise(promise, {request, success, fail}, payload={}) {
        this.dispatch(request, payload);
        promise.then(
            data => this.dispatch(success, {data, payload}),
            data => this.dispatch(fail, {data, payload}),
        );
    }
}
