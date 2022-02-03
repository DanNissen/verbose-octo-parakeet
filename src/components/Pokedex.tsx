interface IPokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const Pokedex: React.FC = () => {
  return (
    <div style={{ minWidth: "500px", maxWidth: "700px", margin: "1em" }}>
      <ul>
        <li>
          Query the <a href="https://pokeapi.co/">pokedex api</a> for all
          original 151 pokemon.
        </li>
        <li>
          Since the information is static this information should be cached.
        </li>
        <li>
          The data we want from the api is defined in <code>IPokemon</code>
        </li>
        <li>
          Show the Pokemon in a list in this Sidebar including their name and
          image.
        </li>
        <li>
          Create an input that takes a pokemon name and shrinks the list to show
          only the pokemon that match that input.
        </li>
        <li>
          Add a button that will allow you to perform a draw interaction with
          the map{" "}
          <a href="https://openlayers.org/en/latest/doc/">
            (provided by openlayers)
          </a>
          , and when you click the map an image of the pokemon will be placed
          where you have clicked.{" "}
          <a href="https://openlayers.org/en/latest/examples/draw-and-modify-features.html">
            Check out this example
          </a>
        </li>
        <li>Walk us through how you would start testing this app</li>
      </ul>
    </div>
  );
};

export default Pokedex;
