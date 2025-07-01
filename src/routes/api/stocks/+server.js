import { json } from '@sveltejs/kit';

const symbols = [
  "ACC.NS", "ADANIGREEN.NS", "ADANIPORTS.NS", "AMBUJACEM.NS", "ASIANPAINT.NS", 
  "AUBANK.NS", "BAJAJ-AUTO.NS", "BAJFINANCE.NS", "BAJFINANCE.NS", "BHARTIARTL.NS", 
  "BRITANNIA.NS", "CIPLA.NS", "DIVISLAB.NS", "DRREDDY.NS", "EICHERMOT.NS", 
  "GAIL.NS", "GRASIM.NS", "HCLTECH.NS", "HDFC.NS", "HDFCBANK.NS", 
  "HDFCLIFE.NS", "HEROMOTOCO.NS", "HINDALCO.NS", "HINDUNILVR.NS", "ICICIBANK.NS", 
  "INDUSINDBK.NS", "ITC.NS", "JSWSTEEL.NS", "KOTAKBANK.NS", "LT.NS", 
  "M&M.NS", "MARUTI.NS", "NESTLEIND.NS", "NTPC.NS", "ONGC.NS", 
  "POWERGRID.NS", "RELIANCE.NS", "SBIN.NS", "SHREECEM.NS", "SUNPHARMA.NS", 
  "TATACONSUM.NS", "TATAMOTORS.NS", "TATASTEEL.NS", "TECHM.NS", "TCS.NS", 
  "ULTRACEMCO.NS", "UPL.NS", "WIPRO.NS"
];

// Function to fetch stock data from Yahoo Finance
async function fetchStock(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;
  const res = await fetch(url);
  const data = await res.json();
  
  const price = data.chart.result?.[0]?.meta?.regularMarketPrice;
  const name = symbol; // You can map to actual name later or from other data

  return { symbol, name, price };
}

// API route handler
export async function GET() {
  const results = await Promise.all(symbols.map(fetchStock));
  return json(results);
}
