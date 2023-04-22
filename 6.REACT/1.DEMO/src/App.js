import './App.css';
import ItemName from './components/ItemName';
import Item from './components/Item';

function App() {
  const response=[
    {
      itemName:"Shikhar",
      itemDay:1,
      itemMonth:"jan",
      itemYear:2001
    },
    {
      itemName:"Prakhar",
      itemDay:2,
      itemMonth:"feb",
      itemYear:2002
    },
    {
      itemName:"Madhuri",
      itemDay:3,
      itemMonth:"march",
      itemYear:2003
    }
  ]
  return (
    <div className="wrapper">
      {/* <Item name="nirma"></Item>
      <ItemName day="20" month="june" year="1999"></ItemName> 

      <Item name="surf-excel"></Item>
      <ItemName day="21" month="july" year="2000"></ItemName>

      <Item name="Rin"></Item>
      <ItemName day="22" month="may" year="1990"></ItemName> */}

      <Item name={response[0].itemName}></Item>
      <ItemName day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemName> 

      <Item name={response[1].itemName}></Item>
      <ItemName day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemName>

      <Item name={response[2].itemName}></Item>
      <ItemName day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemName>
      <div className="App">THIS IS END</div>
    </div>
    
  );
}

export default App;
