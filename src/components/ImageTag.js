import React, { useState } from 'react'

import { motion } from 'framer-motion'

const ImageTag = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <motion.div layout className='subject' onHoverStart={() => setToggle(true)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className='learning-line'></div>
    </motion.div>
  )
}

export default ImageTag
