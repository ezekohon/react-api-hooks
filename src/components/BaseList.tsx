import React from 'react';
import { BaseListItem } from './BaseListItem';
import { List } from '@material-ui/core';
import { HNItem } from '../types';


interface BaseListProps {
  items: HNItem[]
}

export const BaseList: React.FunctionComponent<BaseListProps> = ({ items }) => {

  return (
    <>
     <List>
      {items.map(item => (
        <BaseListItem item={item} key={item.objectID}></BaseListItem>
      ))
      }
    </List>
    </>
  );
}