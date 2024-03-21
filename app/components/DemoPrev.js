import Image, { getImageProps } from 'next/image'

function DemoPrev({url, alt}) {

  return (
    <Image sizes='(max-width:768px) 70vw, 30vw' quality={50} alt={alt} src={url} />
  )
}

export default DemoPrev