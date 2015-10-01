'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

exports['default'] = function (props) {
    return {
        validator: function validator(value, params) {
            if (value) {
                return Promise.resolve(true);
            }

            return Promise.reject(params.message);
        },
        params: {
            message: props && props.message || 'Field is required'
        }
    };
};

module.exports = exports['default'];
