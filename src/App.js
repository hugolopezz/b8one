import Products from "./components/Products";
import productImage from "../src/images/productImage.png";

const products = [{
  productImage: productImage,
  productName: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
  listPrice: '2.813,99',
  spotPrice: '2.599,00',
  numberOfInstallments: '10',
  installmentValue: '259,90'
},
{
  productImage: productImage,
  productName: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
  listPrice: '2.813,99',
  spotPrice: '2.599,00',
  numberOfInstallments: '10',
  installmentValue: '259,90'
}]

function App() {
  return (
    <div className="App">
      <Products products={products}/>
    </div>
  );
}

export default App;
