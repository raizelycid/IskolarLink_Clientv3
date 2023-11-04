import React from 'react'
import './AccFinish.css';

const AccFinish = ({show}) => {
  return (
    <div className='accreditation-form-success-container' style={{display:show}}>
    <img src="http://localhost:3001/assets/accreditationform_success.png" alt="Accreditation Form Success" className='accreditation-form-success'/>
    <h2 className='accreditation-form-success-header'>Done! Excited to establish your organization</h2>
    <h4 className='accreditation-form-success-subheader'>Your application is now being reviewed by the COSOA. See status of your application in the Accreditation tab.</h4>
    </div>
  )
}

export default AccFinish
