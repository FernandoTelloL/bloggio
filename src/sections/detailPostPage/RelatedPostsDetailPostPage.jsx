import { CardType1 } from '../../components'
import img1 from '../../assets/images/img1.webp'
import img2 from '../../assets/images/img2.webp'

export const RelatedPostsDetailPostPage = () => {
  return (
    <>
      <h2 className='font-bold text-3xl'>Posts Relacionados</h2>
      <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <CardType1 img={img1} imgHeight='h-[140px]' />
        <CardType1 img={img2} imgHeight='h-[140px]' />
        <CardType1 img={img1} imgHeight='h-[140px]' />
        <CardType1 img={img2} imgHeight='h-[140px]' />
        <CardType1 img={img1} imgHeight='h-[140px]' />
        <CardType1 img={img2} imgHeight='h-[140px]' />
      </div>
    </>
  )
}
