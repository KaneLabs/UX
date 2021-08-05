'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importDefault(require('react'));
const react_native_1 = require('react-native');
const addon_knobs_1 = require('@storybook/addon-knobs');
const Container_1 = __importDefault(
  require('eros-ui-storybook/components/Container'),
);
const storiesOf_1 = require('eros-ui-storybook/helpers/storiesOf');
const TextField_1 = __importDefault(require('./TextField'));
exports.default = storiesOf_1
  .storiesOf('Components|TextField', module)
  .addParameters({ jest: ['TextField'] })
  .add('TextField', () => (
    <Container_1.default>
      <react_native_1.View
        style={{ flexDirection: 'column', flexWrap: 'wrap' }}>
        <TextField_1.default
          placeholder="Enter Text"
          value={addon_knobs_1.text(
            'Text',
            'The spectacle before us was indeed sublime.',
          )}
        />
      </react_native_1.View>
    </Container_1.default>
  ));
