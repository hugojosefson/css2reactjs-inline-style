# css2reactjs-inline-style

_Converts css strings to fit in a ReactJS project's js style objects._

This tool may come in handy whenever you want to take existing `.css` or `.less` definitions, and move them into ReactJS components, in an inline `.js` style.

## Example use-case
For example, you have this `style.css` file:

```css
.special-text {
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
}
```

You want to turn it into this `style.js` file:

```js
module.exports = {
    specialText: {
        fontSize: '24px',
        letterSpacing: 0,
        lineHeight: '32px'
    }
};
```

...which you can use for inline styling a ReactJS component:

```jsx
var style = require('./style');

module.exports = React.createClass({
    render: function() {
        return <p style={style.specialText}>This very special text.</p>;
    }
});
```

## How to download

```bash
$ npm install -g css2reactjs-inline-style
```

## How to use

Start the converter and leave it running:

```bash
$ css2reactjs-inline-style       # Usually, you can simply type css2r and
                                 # then hit TAB to autocomplete that long word.
```

Then copy the internal parts of the css you wish to convert:

```
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
```

Paste it into the tool, and it will spit this out for you:

```
fontSize: '24px',
letterSpacing: 0,
lineHeight: '32px'
```

Copy it, and paste into your js file in the correct place. It will fit perfectly inside a JS object literal (`{}`).

Enjoy!