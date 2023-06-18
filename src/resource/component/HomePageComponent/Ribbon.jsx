import './Ribbon.css'
import ReactGA from 'react-ga';
ReactGA.initialize('G-R2Q7XQ6WBW');
ReactGA.pageview(window.location.pathname + window.location.search);
const Ribbon = () => {
  return (
    <div >
        <div className="position-relative marquee-container d-none d-sm-block ">
  <div className="marquee d-flex justify-content-around">
    <span>BTC<b>3,588.39</b></span>
    <span>XRP<b>0.32</b></span>
    <span>ETH<b>116.36</b></span>
    <span>EOS<b>2.44</b></span>
    <span>USDT<b>1.01</b></span>
    <span>LTC<b>32.61</b></span>
    <span>XLM<b>0.10</b></span>
    <span>TRX<b>0.03</b></span>
    <span>BSV<b>74.29</b></span>
    <span>ADA<b>0.04</b></span>
  </div>
  <div className="marquee marquee2 d-flex justify-content-around">
    <span>BTC<b>3,588.39</b></span>
    <span>XRP<b>0.32</b></span>
    <span>ETH<b>116.36</b></span>
    <span>EOS<b>2.44</b></span>
    <span>USDT<b>1.01</b></span>
    <span>LTC<b>32.61</b></span>
    <span>XLM<b>0.10</b></span>
    <span>TRX<b>0.03</b></span>
    <span>BSV<b>74.29</b></span>
    <span>ADA<b>0.04</b></span>
  </div>
</div>
    </div>
  )
}

export default Ribbon