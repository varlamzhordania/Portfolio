import Image from "next/image";
import logo from "./../../../../public/fiverr-vector-logo.svg"


const Fiverr = () => {
    return (
        <Image src={logo} alt={"fiverr"} width={120} height={120} style={{backgroundColor:"white",borderRadius:"4px",padding:"2px"}}/>
    )
}

export default Fiverr