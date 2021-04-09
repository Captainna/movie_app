import PropTypes from "prop-types"


function Food({name, rating}){
  
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>

    </div>);

}

Food.propTypes = {
  name:PropTypes.string.isRequired, rating:PropTypes.number.isRequired
}



const foodILike = [{id:1, name:'tomato', rating:5},{id:2, name:'potato', rating:4.8}]

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} rating={dish.rating}/> )}
    </div>
  );
}

export default App;
