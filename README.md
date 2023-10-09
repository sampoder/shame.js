# `shame.js`: be shamed for your `eval()` addiction.


Install `shame.js` with:

```bash
npm install shame.js
```

And start every new project with this line:

```js
require("shame.js")()
```

Before, you would have wrriten this code:

```js
eval("console.log(String.fromCodePoint(0x1F600 + Math.floor(Math.random() * (0x1F64F - 0x1F600 + 1))))")
```

Now, you'll be writing:

```js
ಥ_ಥ("console.log(String.fromCodePoint(0x1F600 + Math.floor(Math.random() * (0x1F64F - 0x1F600 + 1))))")
```

And your addiction will be cured in no time! Run `ᐛ()` to celebrate.

###### PSA: don't be sneaky and use `new Function()`; that's now `new ಠ_ಠ()`
