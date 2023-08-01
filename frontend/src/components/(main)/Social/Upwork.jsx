import Image from "next/image";
import logo from "../../../../public/upwork-vector-logo-2021.svg";

const Upwork = () => {
    return (
        <Image src={logo} alt={"upwork"} width={120} height={120}
               style={{backgroundColor: "white", borderRadius: "4px",padding:"2px"}}/>
    )
}
export default Upwork