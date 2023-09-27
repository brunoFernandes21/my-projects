import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, image, url }) => {
  return (
    <div className=' project__card shadow-md shadow-white/[.4] bg-slate-100'>
      <img src={image} width={350} height={350} className='rounded-t-md'/>
      <p className='font-bold mt-2 text-slate-900'>{title}</p>
      {url && <Link to={url} target='__blank' className='inline-block mt-2'>
        <p className='bg-green-500 font-bold rounded-full py-1 px-2'>Live preview</p>
      </Link>}
      {!url && <p className='inline-block mt-2 bg-red-600 font-bold rounded-full py-1 px-2'>Coming Soon</p>}
    </div>
  )
}

export default ProjectCard