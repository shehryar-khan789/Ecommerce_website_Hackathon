
import Fonts from "./components/fonts";

import { Hero } from "./components/hero";
import Products from "./products/page";
import Top_sell from "./products/sell";


export default function Home() {
  return (
    <div>
      
      <Hero/>
      <Fonts/>
      <Products/>
      <Top_sell/>
    </div>
  )
}
