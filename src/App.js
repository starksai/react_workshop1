import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar1 from './components/Navbar/Navbar';
import ProductContainor from './components/productsContainor/productsContainor';

export default function App(){
  return(
    <div>
      <Navbar1 />
      <ProductContainor />
    </div>
  )
}