import React from 'react'
import styles from './styles.module.css'

function Menuiconanimate() {
  return (
    <div>
      <span className={`${styles.navbuttoniconmenu} ${styles.buttonround}`}>
	<span className={styles.buttonbg}>
		<span className={styles.buttonbglayers}>
			<span className={`${styles.buttonbglayer} ${buttonbglayer1yellow}`}></span>
			<span className={`${styles.buttonbglayer} ${buttonbglayer2turquoise}`}></span>
			<span className={`${styles.buttonbglayer} ${buttonbglayer3purple}`}></span>
		</span>
	</span>
	<span className={styles.buttoninner}>
		<span className={styles.buttoninnerstaticmode}>
			<svg className={styles.navbuttoniconsvg} width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className={styles.navbuttoniconpathtop} d="M0 1L16 1" stroke="currentColor" stroke-width="2"></path>
				<path className={styles.navbuttoniconpathmiddle} d="M0 6L16 6" stroke="currentColor" stroke-width="2"></path>
				<path className={styles.navbuttoniconpathbottom} d="M0 11L16 11" stroke="currentColor" stroke-width="2"></path>
			</svg>
		</span>
	</span>
</span>
    </div>
  )
}

export default Menuiconanimate