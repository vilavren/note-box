import { FC } from 'react'

export const People: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px]">
          <img
            src="/people-documents.png"
            alt="Картинка человека с документами"
            className="object-contain"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <img
            src="/people-reading.png"
            alt="Картинка человека с книгой"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
