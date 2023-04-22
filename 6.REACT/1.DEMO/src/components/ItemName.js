import './ItemName.css';

function ItemName(props){
    // const itemDay=20;
    // const itemMonth="june";
    // const itemYear=1998;

    const itemDay=props.day;
    const itemMonth=props.month;
    const itemYear=props.year;


    return(
        <p className="para">
            <span>{itemDay} </span>
            <span>{itemMonth} </span>
            <span>{itemYear} </span>
        </p>
    );
}

export default ItemName;