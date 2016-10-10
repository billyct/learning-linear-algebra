/**
 * Created by billyct on 2016/10/9.
 */

import React, {Component, PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {FormattedMessage} from 'react-intl';

const SelectableList = makeSelectable(List);

const styles = {
  appBar__title: {
    fontSize: 18
  }
};

class AppNavDrawer extends Component {

  static propTypes = {
    onChangeList: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired
  };


  render() {
    const {
      open,
      onChangeList,
      location
    } = this.props;
    
    return (
      <Drawer open={open}>
        <AppBar title="Learning Linear Algebra" showMenuIconButton={false} titleStyle={styles.appBar__title}/>
        <SelectableList
          onChange={onChangeList}
          value={location.pathname}
        >
          <Subheader>
            <FormattedMessage id={'table_of_contents'}/>
          </Subheader>
          <ListItem
            primaryText={<FormattedMessage id={'chapter_1'}/>}
            initiallyOpen={true}
            primaryTogglesNestedList={true}
            nestedItems={[
                <ListItem
                  primaryText={<FormattedMessage id={'chapter_1_1'}/>}
                  value="/chapter_1_1"
                  href="#/chapter_1_1"
                />,
                <ListItem
                  primaryText={<FormattedMessage id={'chapter_1_2'}/>}
                  value="/chapter_1_2"
                  href="#/chapter_1_2"
                />
              ]}
          />
        </SelectableList>
      </Drawer>
    );
  }
}

export default AppNavDrawer;