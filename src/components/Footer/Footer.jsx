import React from 'react'
import styles from './Footer.module.scss'

import { FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={ styles.footer }>
        <div className={ styles.footer__texts }>
            <p>Baixe o jogo</p>
            <p>Torneios independentes</p>
            <p>Baixe o aplicativo de celular</p>
        </div>
        <div className={ styles.footer__social}>
            <div className={ styles.footer__icons }>
                <a href="https://www.linkedin.com/in/danilo-perestrelo-silva-13814968/" target="_blank" rel="noreferrer" ><FaLinkedinIn className={ styles.footer__icons__linkedin } /></a> 
                <a href="https://github.com/Perestra?tab=repositories" target="_blank" rel="noreferrer" ><FaGithub className={ styles.footer__icons__github } /></a> 
                <a href="https://www.instagram.com/daniilo.ps/" target="_blank" rel="noreferrer" ><FaInstagram className={ styles.footer__icons__instagram } /></a> 
            </div>
            <div className={ styles.footer__developed }>
                <span>Desenvolvidor por <strong>Danilo Perestrelo</strong></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer