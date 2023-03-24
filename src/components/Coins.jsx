import { Pagination } from '@material-ui/lab';
import React, { useState, useEffect } from 'react';
import "./Coins.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  pagination: {
    '& .MuiPaginationItem-root': {
     color: 'white',
     fontSize:'1.3rem',
     height:'2.2rem',
     width:'2.2rem',
    },
    '& .Mui-selected': {
      background: 'rgb(186, 4, 183)',
      color: 'white',
    },
  },
  paginationItem: {
    color: 'blue',
  },
}));
function Coins() {
  const [data, setData] = useState([]);
  const[page,setPage]=useState(1);
  const classes = useStyles();
  const fetchData = async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=50&page=1&sparkline=false');
    const jsonData = await response.json();
    setData(jsonData);
  };

   useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='market-update'>
      <div className="market">
      {data.slice(0,4).map((item) => (
       <a className='mpp' key={item.id}>
        <div className="apikeyy">
        <div className="name-imgg"><p key={item.id}><img className='apiimgg' src={item.image} alt="" /></p>
        <div className="nm"><p className='para' key={item.id}>{item.name}</p>
        <p className='para' key={item.id}>{item.price_change_percentage_24h}%</p>
        </div>
        </div>
        <p className='para' key={item.id}>₹{item.current_price}</p>
        
        </div>
        </a>
      ))}
      </div >
        <h1 id='markett' className='mh1'>Market Update</h1>
        <div className="tab">
            <h2 className='h22'>Coin</h2>
            <h2 className='pr'>Price</h2>
            <h2 className='h222'>24h Change</h2>
            <h2 className='h222'>Market Cap</h2>
            <div/>
        </div>
      {data.slice((page-1)*10,(page-1)*10+10).map((item) => (
       <div className='mp' key={item.id}>
        <div className="apikey">
        <div className="name-img"><p key={item.id}><img className='apiimg' src={item.image} alt="" /></p>
        <p className='pp' key={item.id}>{item.name}</p>
        </div>
        <p className='ppp' key={item.id}>₹{item.current_price}</p>
        <p className='pp' key={item.id}>{item.price_change_percentage_24h}%</p>
        <p className='pp' key={item.id}>₹{item.market_cap}</p>
       </div>
        <hr />
        </div>
      ))}
      <Pagination className='pagination'
      count={(data?.length/10).toFixed(0)}
      classes={{
        root: classes.pagination,
        ul: classes.paginationItem,
      }}
      onChange={(_,value)=>{
        setPage(value);
        window.scroll(0,650)
      }}
      />
    </div>
  );
}

export default Coins;

