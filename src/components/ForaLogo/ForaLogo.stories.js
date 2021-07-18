"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const storiesOf_1 = require("eros-ui-storybook/helpers/storiesOf");
const ForaLogo_1 = __importDefault(require("./ForaLogo"));
const Header_1 = __importDefault(require("eros-ui-storybook/components/Header"));
const Container_1 = __importDefault(require("eros-ui-storybook/components/Container"));
/* eslint-disable no-console */
exports.default = storiesOf_1.storiesOf('Components|ForaLogo', module)
    .addParameters({ jest: ['ForaLogo'] })
    .add('ForaLogo', () => (<Container_1.default>
      <Header_1.default title="ForaLogo"/>
      <react_native_1.View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <ForaLogo_1.default />
      </react_native_1.View>
    </Container_1.default>));
