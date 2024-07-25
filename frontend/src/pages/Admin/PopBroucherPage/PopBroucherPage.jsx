import React from 'react'
import Sidebar from '../../../components/Sidebar/Sidebar'
import Broucher from '../PopBroucher/PopBroucher'

const PopBroucherPage = () => {
  return (
    <div style={{ paddingTop: "120px", display: "flex" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <Broucher />
      </div>
    </div>
  )
}

export default PopBroucherPage