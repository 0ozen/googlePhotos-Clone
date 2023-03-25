import React from "react";
import styles from "@/styles/LateralBar.module.css";

export default function LateralBar({ showBar }) {
	return (
		<div className={`${styles.lateralBar} ${showBar && styles.showBar}`}>
			<div className={styles.navCont} role="navigation">
				<div className={styles.nav}>
					<div className={styles.links}>
						<a href="./" aria-label="Todas las fotos">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"></path>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Fotos</div>
								</div>
							</div>
						</a>
						<a href="./explore" aria-label="Explorar">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"></path>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Explorar</div>
								</div>
							</div>
						</a>
						<div>
							<a className="oUj9s" href="./sharing" aria-label="Compartido">
								<div className={styles.icons}>
									<svg width="24px" height="24px" viewBox="0 0 24 24">
										<path d="M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z"></path>
									</svg>

									<div className={styles.JBVD2d}>
										<div className={styles.HksvWb}>Compartido</div>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div className={styles.section2}>Biblioteca</div>
					<div className={styles.optionDiv2}></div>

					<div className={styles.links}>
						<a href="./search/_m8_Favoritos" aria-label="Favoritos">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Favoritos</div>
								</div>
							</div>
						</a>
						<a href="./albums">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h6v7l2.5-1.88L17 11V4h1v16zm-4.33-6L17 18H7l2.5-3.2 1.67 2.18 2.5-2.98z"></path>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Álbumes</div>
								</div>
							</div>
						</a>
						<a href="./managelibrary" aria-label="Utilidades">
							<div className={styles.icons}>
								<div>
									<svg width="24px" height="24px" viewBox="0 0 24 24">
										<path d="M20 4v12H8V4h12m0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path>
									</svg>
								</div>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Utilidades</div>
								</div>
							</div>
						</a>
						<a href="./archive" aria-label="Archivo">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm8-5.35V9.5h-2v4.15l-1.79-1.79-1.42 1.41L12 17.48l4.21-4.21-1.42-1.41z"></path>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Archivo</div>
								</div>
							</div>
						</a>
						<a href="./trash" aria-label="Papelera">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13zM9 8h2v9H9zm4 0h2v9h-2z"></path>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Papelera</div>
								</div>
							</div>
						</a>
					</div>
					<div className={styles.optionDiv}></div>
					<div className={styles.links}>
						<a href="./settings" aria-label="Configuración">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-.53-1.53v.02-.02zm-2.64-.02v.02c.01 0 .01-.01 0-.02zm-.06-.45h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56c-.03.26-.06.53-.06.79s.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55zm7.6-2.53c0 .01-.01.02-.01.03l.01-.03zm-12.45-.01l.01.02c0-.01-.01-.02-.01-.02zM3.93 9.47zm14.29-3.2c0 .01.01.02.01.02l-.01-.02zM5.79 6.25l-.01.02s.01-.01.01-.02zm7.52-2.97v.02-.02zm-2.62-.02v.02-.02z"></path>
									<circle cx="12" cy="12" r="3.5"></circle>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Configuración</div>
								</div>
							</div>
						</a>
						<a role="button" href="#" aria-label="Ayuda y comentarios">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Ayuda y comentarios</div>
								</div>
							</div>
						</a>
						<a aria-label="Descarga la aplicación">
							<div className={styles.icons}>
								<svg width="24px" height="24px" viewBox="0 0 24 24">
									<path d="M5 6h16V4H5c-1.1 0-2 .9-2 2v11H1v3h11v-3H5V6zm16 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
								</svg>
								<div className={styles.JBVD2d}>
									<div className={styles.HksvWb}>Descarga la aplicación</div>
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className={styles.footer}>
					<div>
						<a
							aria-label="Privacidad"
							href="#Privacidad"
							target="_blank"
							role="button">
							Privacidad
						</a>
						&nbsp;&nbsp;·&nbsp;&nbsp;
					</div>
					<div>
						<a
							aria-label="Términos"
							href="#terms"
							target="_blank"
							role="button">
							Términos
						</a>
						&nbsp;&nbsp;·&nbsp;&nbsp;
					</div>
					<div>
						<a
							aria-label="Política"
							href="#answer/9292998?hl=es"
							target="_blank"
							role="button">
							Política
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
