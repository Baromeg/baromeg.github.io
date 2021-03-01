import React from "react"
import "../styles.css"

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
                  {/* <div className="item">
                    <img src="../styles/greenworld.png" alt="..." />
                  </div>
                  <div className="item">
                    <img src="http://rukshan.me/andy/3.png" alt="..." />
                  </div>
                  <div className="item">
                    <img src="http://rukshan.me/andy/4.png" alt="..." />
                  </div> */}
                </div>
                {/* <!-- Controls --> */}
                {/* <a
                  className='left carousel-control'
                  href='#carousel-ninja'
                  role='button'
                  data-slide='prev'
                >
                  <span
                    className='glyphicon glyphicon-chevron-left'
                    aria-hidden='true'
                  ></span>
                  <span className='sr-only'>Previous</span>
                </a> */}
                {/* <a
                  className='right carousel-control'
                  href='#carousel-ninja'
                  role='button'
                  data-slide='next'
                >
                  <span
                    className='glyphicon glyphicon-chevron-right'
                    aria-hidden='true'
                  ></span>
                  <span className='sr-only'>Next</span>
                </a> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default Mockup
