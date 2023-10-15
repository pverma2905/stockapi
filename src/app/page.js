"use client"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useEffect } from 'react';

export default function Home() {
  const [stock, setStock] = React.useState('');
  const [stocklabel, setStocklabel] = React.useState('');
  useEffect(() => {
    console.log("test")
  }, [])

  const handleChange = (event) => {
    fetch("/api/getstockprice").then((res) => {

      return res.json()
    }).then((data) => {
      console.log(data)
      setStock(data.price)
    }).catch((err) => {

    }).finally(() => {

    })
    console.log(event.target.value)
    setStocklabel(event.target.value);
  };
  return (
    <div>
      <h1>Current Price of below stock {stock}</h1>
      <FormControl sx={{ m: 1, minWidth: 500 }}>
        <InputLabel id="demo-simple-select-helper-label">Select Stock</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={stocklabel}
          label="Select Stock"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="idfc">IDFC</MenuItem>
          <MenuItem value="hdfc">HDFC</MenuItem>
          <MenuItem value="icici">ICICI</MenuItem>
          <MenuItem value="axis">AXIS</MenuItem>
          <MenuItem value="sbi">SBI</MenuItem>
          <MenuItem value="pnb">PNB</MenuItem>
        </Select>
      </FormControl>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl> */}
    </div>
  )
}
