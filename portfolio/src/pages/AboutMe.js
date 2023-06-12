import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
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
                     <p>I love to be on the move and see new places, but people are my favorite subject. My mission is to be able to give a voice to those who need it.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <div class="container-fluid">
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6" style={{border:"1px  solid #ddd"}}>
      <img src="my work.jpeg" alt="responsive webite" class="img-fluid" />
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6" style={{border:"1px solid #ddd"}}>
      <h2>Bootstrap Responsive Website</h2>
      <p>Bootstrap is a famous front-end framework used to create mobile-first responsive websites. The latest release
        version of bootstrap has removed JQuery dependency not fully work on vanilla javascript.</p>
      <p>By Using bootstrap it becomes very easy to build a responsive website.</p>
    </div>
  </div>
</div>
    </>
  )
}

export default AboutMe
