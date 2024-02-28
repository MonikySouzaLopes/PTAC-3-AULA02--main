import styles from "./footer.module.css";
import Image from "next/image";
export default function Footer(){
    return(
          <footer>
            <Image width={100} height={100} src={"https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png"}/>
            <h1>Rodapé</h1>
          </footer>
    );
};