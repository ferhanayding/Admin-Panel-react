import "./widgetLg.css"

const WidgetLg = () => {
  const Button = ({type}) =>{
    return <button className={"widgetLgButtonInfo "+type} >{type}</button>
  }

  return <div className="widgetLg">
      <h3 className="widgetlgTitle">Latest Transactions</h3>
    <div className="widgetLgWrapper">
      
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
   
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="decline" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="pending" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="decline" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="pending" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
        <tr className="widgetLgUserTr">
         <td className="widgetLgUserInfo">
          <img className="widgetLgUserImg"  src="https://listelist.com/wp-content/uploads/2019/02/thispersondoesnotexist.jpg" alt="" />
          <h3 className="widgetLgUsername">Athena</h3>
         </td>
         <td className="widgetLgDate">
           2 Jun 2021
         </td>
         <td className="widgetLgAmount">$2.123</td>
          <td className="widgetLgStatus">
            <Button type="approved" />
          </td> 
        </tr>
      
      </table>
    </div>
  </div>;
};

export default WidgetLg;
