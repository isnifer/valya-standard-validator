import test from 'tape';
import action from './index';

const validator = action();

test('export', assert => {
    assert.true(
        typeof action === 'function',
        'Should be function'
    );

    assert.true(
        typeof validator === 'object',
        'Validator should be an object'
    );

    assert.true(
        validator.hasOwnProperty('validator'),
        'Validator should have "validator" property'
    );

    assert.true(
        typeof validator.validator === 'function',
        'Validation method should be a function'
    );

    assert.true(
        validator.hasOwnProperty('params'),
        'Validator should have "params" property'
    );

    assert.end();
});

test('validate', assert => {
    const customValidator = action({message: 'Custom message'});

    Promise.all([
        validator
            .validator(4, validator.params)
            .then(function (value) {
                assert.true(value, 'should resolve');
                return value;
            }),
        validator
            .validator(null, validator.params)
            .then(function () {

            }, function (err) {
                assert.equal(err, validator.params.message, 'should reject');
                return err;
            }),
        customValidator
            .validator(null, customValidator.params)
            .then(function () {

            }, function (err) {
                assert.equal(err, 'Custom message', 'should reject with custom message');
                return err;
            })
    ]).then(function () {
        assert.end();
    })
});
