import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <>
        <p className='footer'>
            Created by 
            <a href='https://dev-ty.netlify.app'>
                <span className='footer-name'>
                    <span className='T'>T</span>
                    <span className='E'>E</span>
                    <span className='E'>E</span>
                    <span className='2'>2</span>
                    <span className='D'>D</span>
                    <span className='W'>W</span>
                    <span className='H'>H</span>
                    <span className='Y'>Y</span>
                </span>
            </a>
            <br/>
            <span className='calendar'>{year}</span>
         </p>
    </>
  )
}

export default Footer