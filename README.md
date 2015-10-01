# valya-standard-validator
Standard validator for [@deepsweet/valya](https://github.com/deepsweet/valya)

[![npm version](https://img.shields.io/npm/v/valya-standard-validator.svg?style=flat)](https://www.npmjs.com/package/valya-standard-validator)
[![dependencies](http://img.shields.io/david/isnifer/valya-standard-validator.svg?style=flat)](https://david-dm.org/isnifer/valya-standard-validator)
[![tests](https://travis-ci.org/isnifer/valya-standard-validator.svg?branch=master)](https://travis-ci.org/isnifer/valya-standard-validator)
[![Coverage Status](https://coveralls.io/repos/isnifer/valya-standard-validator/badge.svg?branch=master&service=github)](https://coveralls.io/github/isnifer/valya-standard-validator?branch=master)

### Installation
```bash
npm install -S valya-standard-validator
```

### Usage
```js
import x from 'valya-standard-validator';
let standardValidator = x(/* you can send custom error message like {message: 'message'} */);
// ...
<Validator
    value={this.state.username}
    validators={[standardValidator]}>
    <input value={this.state.username} onChange={::this.setUsername} />
</Validator>
```

### License
MIT © [Anton Kuznetsov](http://github.com/isnifer)

