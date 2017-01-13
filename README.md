# jest-serializer-html-string [![NPM version](https://badge.fury.io/js/jest-serializer-html-string.svg)](https://npmjs.org/package/jest-serializer-html-string) [![Build Status](https://travis-ci.org/ruyadorno/jest-serializer-html-string.svg?branch=master)](https://travis-ci.org/ruyadorno/jest-serializer-html-string)

A slightly better Jest snapshot serializer for working with strings containing rendered html.

## Example

### Given:

```js
function renderElem(props) {
	return `<body>
				<div class="home active">
					<h1><img src="${ props.img }" alt="Foo"/></h1><div>Hello</div>
					<p><span class="something">Hey</span>
					<img src="${ props.img }" /></p>
				</div>
			</body>
	`;
}

expect(renderElem({ img: 'foo.png' })).toMatchSnapshot();
```

### Produces beautified snapshot:

```html
<body>
  <div class="home active">
    <h1>
      <img src="/foo.png" alt="Foo" />
    </h1>
    <div>Hello</div>
    <p>
      <span class="something">Hey</span>
      <img src="/foo.png" />
    </p>
  </div>
</body>
```

## Setup

### Install from npm:

```sh
npm install --save-dev jest-serializer-html-string
```

### Add it to your Jest config:

```json
"jest": {
  "snapshotSerializers": ["jest-serializer-html-string"]
}
```

Please refer to the [Jest snapshotSerializers config docs](https://facebook.github.io/jest/docs/configuration.html#snapshotserializers-array-string) if you need more info.

## License

MIT © [Ruy Adorno](http://ruyadorno.com)

