import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './App.css';
import { BaseList } from './components/BaseList'
import { HNItem } from './types';
import { TextField, AppBar, Toolbar, Typography, FormControlLabel, FormGroup, Switch  } from '@material-ui/core';
import { useTheme } from './contexts/theme'

function App() {
  const [items, setItems] = useState<HNItem[]>([]);
  const [query, setQuery] = useState('redux');
  const [darkTheme, setDarkTheme] = useTheme();
  // const toggleTheme = useUpdateTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  const debounceSearch = useRef(
    _.debounce(async (query) => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`,
      );
      console.log(result)
      setItems(result.data.hits);

    }, 700)
  );

  useEffect(() => {
    const fetchData = async () => {
      if (query)
        await debounceSearch.current(query);
      else
        setItems([]);
    }

    fetchData();
  }, [query]);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            HackerNews Searcher
          </Typography>
          <FormGroup>
        <FormControlLabel
          control={<Switch checked={darkTheme} onChange={setDarkTheme} aria-label="login switch" />}
          label={darkTheme ? 'Dark Theme' : 'Light Theme'}
        />
        </FormGroup>
        </Toolbar>
        
      </AppBar>

      <TextField id="standard-basic" label="Search" value={query} onChange={handleChange} />
      <BaseList items={items}></BaseList>
    </>
  );
}

export default App;
