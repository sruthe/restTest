export function parseData(transactions){
    let balancesDate = transactions.reduce(function (prev, curr) {
        if (!prev[curr.Date]) {
            prev[curr.Date] = {
                'total': 0,
            };
        }
        prev[curr.Date].total +=  parseFloat(curr.Amount);
        return prev;
    }, {});

    let obj = {};
    let rt = 0;

    Object.keys(balancesDate).sort((a,b)=>a>b?1:-1).forEach((it, index)=> {
        obj[it]= balancesDate[it];
        if(index===0){
            rt = balancesDate[it].total;
            obj[it].runningTotal = rt;
        }else{
            obj[it].runningTotal = obj[it].total + rt;
        }
        rt = obj[it].runningTotal
    })
    return obj;
}

export function printDailyTransactionAmounts(transactions){
    console.log('\n\nTotal transaction amounts per day\n')
    Object.keys(transactions).map((key)=>{
        console.log(key, transactions[key].total.toFixed(2));
    })
}

export function printRunningDailyBalance(transactions){
    console.log('\n\nRunning daily balance\n')
    Object.keys(transactions).map((key)=>{
        console.log(key, transactions[key].runningTotal.toFixed(2));
    })
}