---
to: src/components/<%= name %>/index.js
unless_exists: true
---
import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const <%= name %> = ({ name }) => {
  return (
    <div>
      <h1>{name}!</h1>
    </div>
  );
};

<%= name %>.propTypes = {
  /** Name of component */
  name: PropTypes.string.isRequired,
};

export default <%= name %>;

/**
 *  Other Patterns I find useful...
 */

// class ParentComponent extends Component {
//     render() {
//         // My basic render function structure:
//
//         // 1) Extract values from props and state
//         const {a, b, someBoolean, someList} = this.props;
//
//         // 2) Render any dependent items into temporary variables, such as conditional components or lists
//         const conditionalComponent = someBoolean ? <SomeComponent /> : null;
//         const listItems = someList.map(item => <ListItem item={item} />);
//
//         // 3) Use a single JSX structure, with the temporary variables in the correct spots.
//         // Note that I avoid logic inline in my JSX.  That's perfectly legal, but I prefer to
//         // make the use of that logic as clear as possible by keeping it outside the JSX.
//         return (
//             <div>
//                 <div>A: {a}, B: {b}</div>
//                 {conditionalComponent}
//                 {listItems}
//             </div>
//         );
//     }
// }
//
//
//  class ParentComponent extends Component {
//      renderListItem(item){
//          return (
//              <ListItem item={item} />
//          )
//      }
//
//      // some other methods...
//      render () {
//          // ...extract values from props, state and so
//
//          // ...conditional components,
//
//          // here the map is done without re-defining the
//          // function each time we render.
//          const listItems = someList.map(this.renderListItem);
//
//          // continue with the usual
//      }
//  }
