import Chart from "../../components/Chart/Chart";
import Featured from "../../components/featured/Featured";
import "./Home.css"
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
const Home = () => {
  return <div className = "home" >
    <div className="homeWrapper">

      <Featured/>
      <div className="chartContainer" >
      <Chart  data={userData} title = "User Analytics" grid dataKey={"Active User"} />
      </div>
      <div className="widgets" >
      <WidgetSm/>
      <WidgetLg/>
      </div>
    </div>
  </div>;
};

export default Home;
