import { FC } from 'react'

import { Button } from '../ui/button'
import { Icons } from '../ui/icons'

export const SocialIcons: FC = () => {
  return (
    <>
      <Button variant="outline" type="button">
        <Icons.apple className="mr-2 h-4 w-4" />
        Apple
      </Button>
      <Button variant="outline" type="button">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button variant="outline" type="button">
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
      </Button>
    </>
  )
}
