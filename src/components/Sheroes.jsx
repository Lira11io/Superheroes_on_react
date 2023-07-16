import "../style/sheroes.css";

function Superheroes(props) {
  return (
    <div className="superheroe-container">
      <h2 className="superheroe-title">{props.name}</h2>
      <div className="superheroe-universe">Вселенная: {props.universe}</div>
      <div className="superheroe-alterego">Альтер эго: {props.alterego}</div>
      <div className="superheroe-occupation">Занятие: {props.occupation}</div>
      <div className="superheroe-friends">Друзья: {props.friends}</div>
      <p className="superheroe-superpowers">Суперсилы: {props.superpowers}</p>
      <img className="superheroe-img" src={props.url} alt="imageHero" />
      <p className="superheroe-info">Краткий экскурс: {props.info}</p>
    </div>
  );
}

export default Superheroes;
