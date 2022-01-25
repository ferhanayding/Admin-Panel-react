import "./Featured.css"
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';
const Featured = () => {
  return <div className="featured">
      <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                  $2.046
                  </span>
                  <span className="featuredMoneyRate" >
                      <span className="rate down" >
                        -12.4
                      </span>
                         <ArrowDownward className="arrowDown" fontSize="large" />
                  </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Sale</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                  $433
                  </span>
                  <span className="featuredMoneyRate" >
                        <span className="rate down ">
                        -21.4
                            </span>
                             <ArrowDownward className="arrowDown" fontSize="large"/>
                  </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">
                  $3.346
                  </span>
                  <span className="featuredMoneyRate" >
                  <span className="rate up">
                        14.4 
                            </span>
                        <ArrowUpward className="arrowUp" fontSize="large"/>
                  </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
  </div>;
};

export default Featured;
