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
                <ImgTag src='https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/47e4dd9a209ee97ce48e06cf6041a2ae2fc48bc6-98x55.png?&h=75&fit=max' alt='Logo do Valorant' />
            </div>
            <div className={ styles.footer__politics }>
                <p>Política de privacidade</p>
                <p>Termos de serviço</p>
                <p>Preferências de cookies</p>
            </div>
            <ImgTag src='https://cmsassets.rgpub.io/sanity/images/dsfx7636/riotbar/fb29dac6eccbcc25808cef911e11bda1c435eb1d-397x232.png?&h=100&fit=max' alt='Imagem da classificação indicativa de 14 anos' />
            <div className={ styles.footer__developed }>
                <span>Desenvolvidor por <strong>Danilo Perestrelo</strong></span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
