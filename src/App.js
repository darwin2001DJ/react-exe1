import "./App.css";
function App() {
  const kitchenItemsPurchased = [
    "Paper Towel Holder",
    "Cups",
    "Drawer Organizers",
    "Water Filtration",
    "Placemats",
    "Cutting Board",
    "Shelf Liners",
    "Placemats",
    "Cutting Board",
    "Shelf Liners",
  ];
  const utilityItemsPurchased = [
    "Light Bulbs",
    "Extension Cords",
    "Batteries",
    "First Aid Kit",
    "Flashlights",
    "Candles",
    "Matches",
  ];
  const homeDecortemsPurchased = [
    "Toss Pillows",
    "Slipcovers",
    "Picture Frames",
    "Wall Art",
    "Door Mats",
    "Lighting",
    "Wall Hanging Kits",
  ];
  const bedroomItemsPurchased = [
    "Mattress Pad",
    "Mattress Protector",
    "Air Mattress",
    "Pillow Protectors",
    "Pillows",
    "Blankets",
    "Quilts",
  ];

  const flexStyle = { display: "flex", justifyContent: "space-around" };

  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Home Essentials</h1>
      <div className="item-row" style={flexStyle}>
        <div className="item-col">
          <h3 id="kitchen-items">Kitchen Essentials</h3>
          <ul>
            {kitchenItemsPurchased.map((e, index) => (
              <li id={"kitchenItems" + (index + 1)} key={e.toString()}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="item-col">
          <h3 id="utility-items">Utility</h3>
          <ul>
            {utilityItemsPurchased.map((e, index) => (
              <li id={"utilityItems" + (index + 1)} key={e.toString()}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="item-col">
          <h3 id="decoration-items">Decorative Items</h3>
          <ul>
            {homeDecortemsPurchased.map((e, index) => (
              <li id={"homeDecorationsItems" + (index + 1)} key={e.toString()}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="item-col">
          <h3 id="bedroom-items">Bedroom Items</h3>
          <ul>
            {bedroomItemsPurchased.map((e, index) => (
              <li id={"bedroomItems" + (index + 1)} key={e.toString()}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
