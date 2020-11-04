import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';
import { HNItem } from '../types';

interface BaseListItemProps {
  item: HNItem
}

export const BaseListItem: React.FC<BaseListItemProps> = ({ item }) => {
  return ( 
  <>
  <ListItem button>
        <ListItemText primary={item.title} />
      </ListItem>
  </>
  )
}