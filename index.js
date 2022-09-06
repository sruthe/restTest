// const express = require('express')
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Calculating Balances.. Check console for results!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


import axios from 'axios';
import { parseData, printDailyTransactionAmounts, printRunningDailyBalance } from './util.js';
const url = "https://resttest.bench.co/transactions/";
let totalCount = 0;
let transactions = [];
let currentPageNumber = 1;

async function getData(){
 axios.get(url+'1.json').then(resp => {
        let data = resp.data;
        totalCount = data.totalCount;
        transactions = data.transactions;
        getAllPages();
    }).catch(err=>{
        console.log('error ', err)
    })
}

async function getAllPages(){
    try{
        while(transactions.length < totalCount){
            currentPageNumber++;
            let result = await axios.get(url+currentPageNumber+'.json')
            // console.log(result.data);
            let data = result.data;
            if(data){
                transactions = [...transactions, ...data.transactions];
            }
        }
    }catch(err){
        console.log('err ', err);
    }
    let data = parseData(transactions);
    printDailyTransactionAmounts(data);
    printRunningDailyBalance(data);
}


getData();