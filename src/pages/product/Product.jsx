import "./product.css"
import {productData} from "../../dummyData"
import Chart from "../../components/Chart/Chart";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { FileUploadOutlined } from "@mui/icons-material";
const Product = () => {
     const {productId} = useParams()
     console.log(productId)
  return <div className="productPage" >
      <div className="productPageHeader">
          <h1 className="headerTitle">Product</h1>
          <Link to={"/newuser"} >
          <button className="headerCreateBtn">Create</button>
          </Link>
      </div>
      <div className="productPageTopWrapper">
      <div className="productPageLeft">
          <Chart className="chart" data={productData} dataKey={"Sales"} grid title="Product Sales Performans"  />
      </div>
      <div className="productPageRight">
          <div className="pageRightTitleContainer">
              <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
               <span className="rightName">Apple Airpods</span> 
          </div>
          <div className="productPageInfoContainer">
                <div className="infoItem">
                <label className="labelName" >id:</label>
                <span className="infoValue" >{productId}</span>
                </div>
                <div className="infoItem">
                <label className="labelName" >sales:</label>
                <span className="infoValue" >$ 123</span>
                </div>
                <div className="infoItem">
                <label className="labelName" >active:</label>
                <span className="infoValue" >yes</span>
                </div>
                <div className="infoItem">
                <label className="labelName" >in stock:</label>
                <span className="infoValue" >no</span>
                </div>
          </div>
      </div>
      </div>
      <div className="productPageCenterBottomContainer">
        <div className="productPageCenterButtonWrapper">
            <div className="centerLeft" >
                <div className="centerLeftItem">
                    <label className="centerLeftItemTitle">Product Name</label>
                    <input className="centerLeftItemInput" placeholder="Apple Airpods"/>
                </div>
               
                <div className="centerLeftItem">
                    <label className="centerLeftItemTitle">In Stock</label>
                    <select className="centerLeftItemSelect" name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="centerLeftItem">
                    <label className="centerLeftItemTitle">Active</label>
                    <select name="isActive" id="isActive" className="centerLeftItemSelect">
                        <option value="yes" className="yes">Yes</option>
                        <option value="no" className="no">No</option>
                    </select>
                </div>
                <div className="updateBtnContainer">
                    <button className="updateBtn">Update Product</button>
                </div>
            </div>

            <div className="centerRight">
                <div className="centerRightWrapper">
                    <img className="centerRightImg" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
                    <label htmlFor="file">
                    <FileUploadOutlined className="centerRightIcon"  fontSize="large" />
                    </label>
                    <input type="file" id="file" style={{display:"none"}} />
                </div>
            </div>
        </div>
      </div>
  </div>;
};

export default Product;
