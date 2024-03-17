import Landing from "./Landing"
import WhyDiagnosify from "./WhyDiagnosify"
import Team from "./Team"
import Footer from "./Footer"

const Home = ()=>{
    return(
        <div>
            <Landing/>
            <WhyDiagnosify/>
            <Team/>
            {/* <Footer/> */}
        </div>
    )
}

export default Home;