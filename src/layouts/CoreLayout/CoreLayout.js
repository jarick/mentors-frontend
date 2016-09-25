import React from 'react'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='container text-center'>
      <div className='core-layout__viewport'>
        <div className="section">
          {children}
        </div>
      </div>
    </div>
    <Footer/>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
