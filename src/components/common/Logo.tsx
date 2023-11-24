import { FC } from 'react'

export const Logo: FC = () => {
  return (
    <div className="hidden items-center gap-x-2 md:flex">
      <img
        src="/logo-light/logo-min-light-nobg-cropp-new.svg"
        alt="Логотип"
        width={35}
        height={35}
      />
      <p className="font-semibold whitespace-nowrap">Note Box</p>
    </div>
  )
}
