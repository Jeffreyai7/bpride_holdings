import { CgCalendar } from 'react-icons/cg'
import Button from '../atoms/Button'
import { BsArrowRight } from 'react-icons/bs'
import { blogposts } from '../../constant'

const Blogcomp = () => {
  return (
    <div>
        <div className='bg-[#FEBD2D1A] py-10'>
            <h1 className='text-[0.9rem] md:text-[1.5rem] font-medium text-center mb-10 underline decoration-bpyellowdark decoration-3'>Our Blog Posts</h1>
            <div className='card-container'>
            {
                blogposts.map(blog => {

                    return (
                        <div key={blog.id} className="card gap-4 p-4  w-[18.125rem] md:w-[23.5rem]">
                            <div className='text-paragtextM md:text-paragtextD px-4'><span>{blog.title}</span></div>
                            <div className=''><img className='w-[98%] mx-auto' src={blog.imgurl} alt="image" /></div>
                            <div>
                                <Button className='bg-[#D6DEF7] font-semibold text-[#3B5FCF] text-[9px] md:text-[12px] p-2'>{blog.category}</Button>
                                <div className='flex justify-between items-center p-4'><div className='flex gap-4'><div className='flex items-center'><img src="src\assets\images\blackpridelogo.png" className='w-7 h-7' alt="" /><span className='text-[9px] md:text-[12px]'> Black Pride</span></div><div className='flex items-center'> <CgCalendar/><span className='text-[9px] md:text-[12px]'>24th, May</span> </div></div> <Button className='p-2 px-4 text-[9px] md:text-[12px] flex items-center gap-2'>Read <BsArrowRight/> </Button></div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Blogcomp