import React from 'react'
import styles from './NotFound.module.scss'

import ImgTag from 'components/ImgTag/ImgTag'
import notFound from 'assets/svg/not-found.svg'
import Button from 'components/Button/Button'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

  const navigate = useNavigate()
  const btnOnClick = () => {
    navigate('/')
    window.scrollTo(0, 0)
  }

  return (
    <main className={ styles.main }>
      <section className={ styles.main__section }>
        <ImgTag  
          className={ styles.main__img }
          src={ notFound }
          alt='Página não encontrada'
        />
        <div className={ styles.main__section }>
          <Button 
            type='button'
            title='Voltar para Home'
            value='Voltar para Home'
            color='red'
            onClick={ () => btnOnClick() }
          />
        </div>
      </section>
    </main>
  )
}

export default NotFound