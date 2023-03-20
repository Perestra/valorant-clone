import React from 'react'
import styles from './Footer.module.scss'

import { ReactComponent as RiotLogo } from 'assets/svg/riot-games-logo.svg'
import { FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'
import ImgTag from 'components/ImgTag/ImgTag'

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
            <div className={styles.footer__logos}>
                <RiotLogo className={ styles.footer__logos__riot } />
                <ImgTag src='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt50870b13992cdf47/63b0d7d089f85210f400107e/val-logo-small.png?&height=75&disable=upscale' alt='Logo do Valorant' />
            </div>
            <div className={ styles.footer__politics }>
                <p>Política de privacidade</p>
                <p>Termos de serviço</p>
                <p>Preferências de cookies</p>
            </div>
            <ImgTag src='https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/blt84ae391429f2375a/5f2db8f41967337e7590c9a8/riot-seloclassind-14-val.png?&height=100&disable=upscale' alt='Imagem da classificação indicativa de 14 anos' />
            <div className={ styles.footer__developed }>
                <span>Desenvolvidor por <strong>Danilo Perestrelo</strong></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer