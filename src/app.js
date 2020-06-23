import { h, Component } from "preact";
import { WidthProvider, Responsive } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class ResponsiveLocalStorageLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layouts: [
        { i: "1", w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 },
        { i: "2", w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 },
        { i: "3", w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 },
        { i: "4", w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 },
        { i: "5", w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }
      ]
    };
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 30
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout
          className="layout"
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={30}
          layouts={this.state.layouts}
        >
          <div key="1">
            <span className="text">1</span>
          </div>
          <div key="2">
            <span className="text">2</span>
          </div>
          <div key="3">
            <span className="text">3</span>
          </div>
          <div key="4">
            <span className="text">4</span>
          </div>
          <div key="5">
            <span className="text">5</span>
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
