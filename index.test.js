import { parseData } from './util.js';

test("Testing Parse Data", () => {
    let transactions = [
        {
          Date: '2013-12-13',
          Ledger: 'Insurance Expense',
          Amount: '-117.81',
          Company: 'LONDON DRUGS 78 POSTAL VANCOUVER BC'
        },
        {
          Date: '2013-12-13',
          Ledger: 'Equipment Expense',
          Amount: '-520.85',
          Company: 'ECHOSIGN xxxxxxxx6744 CA xx8.80 USD @ xx0878'
        },
        {
          Date: '2013-12-13',
          Ledger: 'Equipment Expense',
          Amount: '-5518.17',
          Company: 'APPLE STORE #R280 VANCOUVER BC'
        },
        {
          Date: '2013-12-20',
          Ledger: 'Equipment Expense',
          Amount: '-1874.75',
          Company: 'NINJA STAR WORLD VANCOUVER BC'
        },
        {
          Date: '2013-12-12',
          Ledger: 'Postage & Shipping Expense',
          Amount: '-30.69',
          Company: 'DHL YVR GW RICHMOND BC'
        },
        {
          Date: '2013-12-12',
          Ledger: 'Office Expense',
          Amount: '-42.53',
          Company: 'FEDEX xxxxx5291 MISSISSAUGA ON'
        },
        {
          Date: '2013-12-12',
          Ledger: 'Web Hosting & Services Expense',
          Amount: '-63.01',
          Company: 'GROWINGCITY.COM xxxxxx4926 BC'
        },
        {
          Date: '2013-12-12',
          Ledger: 'Business Meals & Entertainment Expense',
          Amount: '-91.12',
          Company: 'NESTERS MARKET #x0064 VANCOUVER BC'
        }
      ];
    let actualResult = parseData(transactions);
    const expected = {
        '2013-12-12': { total: -227.35, runningTotal: -227.35 },
        '2013-12-13': { total: -6156.83, runningTotal: -6384.18 },
        '2013-12-20': { total: -1874.75, runningTotal: -8258.93 }
      }
    
    expect(actualResult).toMatchObject(expected);
   
 });