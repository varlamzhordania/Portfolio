import Image from "next/image";
import logo from "../../../../public/upwork-vector-logo-2021.svg";

const Upwork = () => {
    return (
        <Image src={logo} alt={"upwork"} width={32} height={32}
               style={{backgroundColor: "white", borderRadius: "4px",padding:"2px"}}/>
    )
}
export default Upwork