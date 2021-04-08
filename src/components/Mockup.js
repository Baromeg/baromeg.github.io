import React from 'react'
import '../styles.css'

const Mockup = (props) => {
  // console.log(props)

  return (
    <>
      <div className='device-mockup macbook_2015  gold'>
        <div className='device'>
          <div className='screen'>
            <section>
              <div
                id='carousel-ninja'
                className='carousel slide inside-laptop'
                data-ride='carousel'
              >
                <div className='carousel-inner' role='listbox'>
                  <div className='item active'>
                    <img src={props.src} alt='...' />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mockup
