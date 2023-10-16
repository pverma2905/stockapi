"use client"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useEffect } from 'react';

export default function Home() {
  const [stock, setStock] = React.useState('');
  const [stocklabel, setStocklabel] = React.useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("call every minute")
      getStockPrice('idfc')
    }, 60000);

    //Clearing the interval 
    return () => clearInterval(interval);

  }, [])



  const getStockPrice = (stockname) => {
    fetch(`/api/getstockprice?stockname=${stockname}`).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data)
      setStock(data.stockPrice)
    }).catch((err) => {

    }).finally(() => {

    })
  }

  const handleChange = (event) => {
    getStockPrice(event.target.value)
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

    </div>
  )
}
