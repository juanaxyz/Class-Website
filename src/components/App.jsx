import "./App.css"
import Background from "../image/bg.jpeg"
import InstaLogo from "../image/instagram.svg"
import Chat from "../image/chat.svg"

function App(){
    return(
        <>
            <div className="container flex justify-center items-center">
                <h1 className="font-mono text-5xl md:text-7xl lg:text-8xl text-white absolute">XII MIPA 2</h1>
                <img src={Background} alt="Foto Bersama" className="w-full"/>

                {/* glassmorphism card */}
            </div>
            <div className="container-card flex justify-center bg-gradient-to-b from-sky-900 to-black">
                <div className="card">
                    <img src={InstaLogo} alt="instagram" className="w-1/4 m-1"/>
                    <h2 className="text-xl md:text-4xl m-1">
                        Our Instagram Class
                    </h2>
                </div>
                <div className="card">
                    <img src={Chat} alt="Anonymous Chat" className="w-1/4 m-1"/>
                    <h2 className="text-xl md:text-4xl m-1">
                        Send Anonym Message
                    </h2>
                </div>

                {/* galery */}
                
            </div>
        </>
    )
}

export default App