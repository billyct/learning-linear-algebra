import React, {Component, PropTypes} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import spacing from 'material-ui/styles/spacing';
import AppBar from 'material-ui/AppBar';
import AppNavDrawer from './AppNavDrawer';


import './App.css';

const muiTheme = getMuiTheme(baseTheme);

const styles = {
  appBar: {
    position: 'fixed',
    // Needed to overlap the examples
    zIndex: muiTheme.zIndex.appBar + 1,
    top: 0
  },
  root: {
    paddingTop: spacing.desktopKeylineIncrement,
    minHeight: 400,
    paddingLeft: 256
  },
  content: {
    margin: `${spacing.desktopGutter * 2}px ${spacing.desktopGutter * 3}px`
  }
};


class App extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleChangeList(event, value) {
    this.context.router.push(value);
  }

  render() {
    const {
      location,
      children,
    } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          <AppBar showMenuIconButton={false} style={styles.appBar}/>
          <AppNavDrawer open={true} onChangeList={this.handleChangeList.bind(this)} location={location}/>
          <div style={styles.root}>
            <div style={styles.content}>
              {children}
            </div>

          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
