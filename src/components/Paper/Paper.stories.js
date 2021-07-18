"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const storiesOf_1 = require("eros-ui-storybook/helpers/storiesOf");
const Container_1 = __importDefault(require("../Container"));
const Paper_1 = __importDefault(require("./Paper"));
const Typography_1 = __importDefault(require("../Typography"));
// import Container from 'eros-ui-storybook/components/Container';
/* eslint-disable no-console */
exports.default = storiesOf_1.storiesOf('Components|Paper', module)
    .addParameters({ jest: ['Paper'] })
    .add('Paper', () => (<Container_1.default style={{ padding: 20 }}>
      <Paper_1.default />
      <Paper_1.default>
        <Typography_1.default text={'Paper'}/>
      </Paper_1.default>
    </Container_1.default>));
