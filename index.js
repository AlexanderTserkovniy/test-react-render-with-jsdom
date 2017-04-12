/**
 * Created by Oleksandr Tserkovnyi on 4/12/17.
 * kemperomg@gmail.com
 */

const jsdom = require('jsdom');
const assert = require('assert');
const React = require('react');
const ReactAddons = require('react-dom/test-utils');

jsdom.env({
  html: '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
  done: function (err, w) {
    window = w;
    document = w.document;
    const Wrapper = class extends React.Component {
      render () {
        return React.createElement('section', {}, this.props.children);
      }
    };
    const div = React.createElement('div', { className: 'Hey hey!' }, 'Let it be the text');
    const rendered = ReactAddons.renderIntoDocument(React.createElement(Wrapper, {}, div));
    const result = ReactAddons.findRenderedDOMComponentWithTag(rendered, 'div');

    assert.strictEqual(result.className, 'Hey hey!');
    assert.strictEqual(result.innerHTML, 'Let it be the text');
    console.log('\n\n\r\rAll right no errors detected!\n\n');
  }
});