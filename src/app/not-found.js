import styles from "./not-found.module.css"
import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer"
export default function NotFound(){
    return (
        <html>
       
      <body >
        <Menu/>
      <div><h1 className={styles.pagErro}>Error - Página não encontrada!</h1></div> 
     <Footer/>
      </body>
    </html>
       
    
    );
}