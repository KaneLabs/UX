export default Portal;
declare class Portal extends Component<any, any, any> {
    constructor(props: any);
}
declare namespace Portal {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
}
import { Component } from "react";
import PropTypes from "prop-types";
