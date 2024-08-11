import Link from "next/link"
import styles from "../page.module.scss"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className={`${styles.dashboardContainer} ${styles.variables}`}>
        <div className={styles.homeLinkContainer}>
        <h1>DASHBOARD</h1>
       <Link className={styles.homeLink} href='/dashboard/all-articles'><h2> All Articles</h2></Link>
       <Link className={styles.homeLink} href='/dashboard/create-article'><h2>Create New Article</h2></Link>
       </div>
        {children}
      </section>
    )
  }