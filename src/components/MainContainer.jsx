import styles from "./maincontainer.module.css"
export default function MainContainer({children}){
    return <div className={styles.mainContainer}>{children}</div>
}