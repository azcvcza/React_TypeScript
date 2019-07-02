function Promise(fn) {
    var state = 'pending';
    var value = null;
    var callbacks = [];

    this.then = function(onFulfilled, onRejected) {
        return new Promise(function(resolve, reject) {
            handle({
                onFulfilled: onFulfilled || null,
                onRejected: onRejected || null,
                resolve: resolve,
                reject: reject
            })
        })
    }

    function handle(handle_callback) {
        if (state === 'pending') {
            callbacks.push(handle_callback)
        }
        var cb = state === 'fulfilled' ? handle_callback.onFulfilled : handle_callback.onRejected;
        var ret;

        if (cb === null) {
            cb = state === 'fulfilled' ? handle_callback.resolve : handle_callback.reject;
            cb(value);
            return;
        }
        ret = cb(value);
        handle_callback.resolve(ret);
    }

    function resolve(newValue) {
        if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
            var then = newValue.then;
            if (typeof then === 'function') {
                then.call(newValue, resolve, reject);
                return;
            }
        }
        state = 'fulfilled';
        value = newValue;
        execute();
    }

    function reject(reason) {
        state = 'rejected';
        value = reason;
        execute();
    }

    function execute() {
        setTimeout(function() {
            callbacks.forEach(function(callback) {
                handle(callback);
            });
        }, 0);
    }

    fn(resolve, reject);
}