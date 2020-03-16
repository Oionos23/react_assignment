import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

const Esalist = (data, classes, isSelected, handleSelect, hasName) => {
  if (hasName) {
    return data.map((option, index) => (
      <ListItem
        key={index}
        className={classes.listItem}
        selected={isSelected(option.name)}
        onClick={() => handleSelect(option.name)}
      >
        <ListItemText primary={`${option.name}`} />
      </ListItem>
    ));
  } else {
    return data.map((option, index) => (
      <ListItem
        key={index}
        className={classes.listItem}
        selected={isSelected(option.log)}
        onClick={() => handleSelect(option.log)}
      >
        <ListItemText primary={`${option.log}`} />
      </ListItem>
    ));
  }
};

export default Esalist;
