import AllArticles from "../components/AllArticles";
import Navbar from "../components/Navbar";
import { dataArticles } from "../data/data"

export default function Articulos () {
    return(
    <div >
      <Navbar/>
      <AllArticles
      articles={dataArticles}
      />
    </div>
    )
}