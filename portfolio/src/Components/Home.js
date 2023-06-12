import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <section className='section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='main-heading' >About me and My Work</h3>
                    <div className='underline mx-auto'>
                      <p>
                      I’m a UX researcher who is passionate about marrying empathy, accessibility, and creativity in design. I have worked with incredibly talented people across different companies.
                      </p>
                      <Link to='/about' className='btn btn-warning shadow'>Read more...</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
