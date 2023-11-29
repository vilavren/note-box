import { ChevronsLeftRight } from 'lucide-react'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Avatar } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Spinner } from '@/components/ui/spinner'
import { authActions } from '@/store/auth/auth.slice'
import { AppDispatch, RootState } from '@/store/store'

export const User: FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { data } = useSelector((s: RootState) => s.auth)

  const logout = () => {
    dispatch(authActions.logout())
    navigate('/')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          role="button"
          className="flex w-full items-center p-3 text-sm hover:bg-primary/5"
        >
          <div className="flex max-w-[150px] items-center gap-x-2">
            <Avatar className="h-5 w-5 bg-primary/20">
              {/* <AvatarImage src={} /> */}
            </Avatar>
            <span className="line-clamp-1 text-start font-medium">
              {data ? data.username : <Spinner />}
            </span>
          </div>
          <ChevronsLeftRight className="ml-2 h-4 w-4 rotate-90 text-muted-foreground" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            {data ? data.email : <Spinner />}
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                {/* <AvatarImage src={} /> */}
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="line-clamp-1 text-sm">
                {data ? data.fullname : <Spinner />}
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          asChild
          className="w-full cursor-pointer text-muted-foreground"
        >
          <button onClick={logout}>Выйти из аккаунта</button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
