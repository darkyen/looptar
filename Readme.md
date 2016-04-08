Well this is a library to break loops, helps you make good UI's originally this
is supposed to go inside babel-plugin-looptar which can do this optionally for you
but if you are one of them who don't like to use transpilers you can use this library
naked.

For usage with babel check out https://github.com/darkyen/babel-plugin-looptar/

#Whats the purpose of this ?
Well this will save you a frozen tab and also will gracefully break your code
in debug mode by throwing a noble error, just like stackoverflows.

#How to install
Good ol' npm install, for those new to javascript development

```bash
  $npm install --save looptar
```

#How to use ?
1. Import Looptar

    This is done by either
    ```javascript
      const Looptar = require('looptar');
    ```

    or in the ES6 way

    ```javascript
      import Looptar from 'looptar';
    ```
2. Create a Looptar instance.
   We will use loop here but you can use whatever you please
   ```javascript
      const loop = new Looptar({
        breakAfter: 1000 // unit in milliseconds, defaults to 1000
      });
   ```

3. Now inject it in all loops have.

  If you had the following code (this is where babel saves you)

  ```javascript
    for(let i = 0; i < 114000000; i++ ){
      /* some expensive operation */
    }
  ```

  It will look like

  ```javascript
    for(let i = 0; i < 114000000; i++){
      loop.iterates(0); // where 0 is the unique id, you can use whatever a string, or whatever.
      /* That expansive operation */
    }
    loop.exits(0); // The id must match here and don't miss it or bad things will happen.
  ```
