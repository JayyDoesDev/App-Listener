# app-listener
 app-listener is a simple express helper to help you connect to ports easily.

 
 ## Installation
 Yarn

 `yarn add app-listener`

 NPM
 
 `npm i app-listener`
 
 
 ## TypeScript
 ```typescript
 import appListener from 'app-listener';

const app: appListener = new appListener()
app.listen(3000)
```

## JavaScript
```javascript
const { default: applistener } = require('../../dist/app')

const app = new applistener()
app.listen(3000)
```


