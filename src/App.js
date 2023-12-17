import { Gallery } from "./Gallery";

function App() {
  const [number, setNumber] = useState(100);
  const items = [...Array(number).keys()].map((i) => i + 1);

  return (
    <>
      <div className="h-10 flex items-center justify-center">
        <input
          className="h-10 w-20 p-4"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          style={{ border: "1px solid #ccc" }}
        />
      </div>
      <div
        className="flex items-center h-[70vh] w-full"
        style={{ justifyContent: "center" }}
      >
        <Gallery
          style={{ border: "1px solid green" }}
          width={600}
          height={400}
          items={items}
          logoWidth={7}
          logoHeight={10}
          itemWidth={10}
          itemHeight={13}
          verticalGap={4}
          horizontalGap={2}
          Logo={0}
          randomness={3}
        />
      </div>
    </>
  );
}

export default App;
