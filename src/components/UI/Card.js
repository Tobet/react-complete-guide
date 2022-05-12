import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // attach classes used on component tag

  return <div className={classes}>{props.children}</div>;
};

export default Card;
