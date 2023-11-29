import * as React from 'react'
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { SocialIcons } from '@/components/common/SocialIcons'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { fetchLogin } from '@/store/auth/auth.asyncActions'
import { authActions } from '@/store/auth/auth.slice'
import { ILogin } from '@/store/auth/auth.types'
import { AppDispatch } from '@/store/store'

interface LoginPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LoginPage: FC = ({ className, ...props }: LoginPageProps) => {
  // const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // async function onSubmit(event: React.SyntheticEvent) {
  //   event.preventDefault()
  //   setIsLoading(true)

  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3000)
  // }

  const dispatch = useDispatch<AppDispatch>()

  const {
    register,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<ILogin>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<ILogin> = async (values) => {
    dispatch(authActions.clearLoginError())
    await dispatch(fetchLogin(values))
  }

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Войти в аккаунт
        </h1>
        <p className="text-sm text-muted-foreground">
          Введите ваш email и пароль
        </p>
      </div>
      <div className={cn('grid gap-3', className)} {...props}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-2">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isSubmitting}
                {...register('email', {
                  required: 'Укажите email',
                })}
              />
              <Label className="sr-only" htmlFor="password">
                Пароль
              </Label>
              <Input
                id="password"
                placeholder="password"
                type="password"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isSubmitting}
                {...register('password', { required: 'Укажите пароль' })}
              />
            </div>
            <Button disabled={!isValid}>
              {isSubmitting && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Войти
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Или продолжить
            </span>
          </div>
        </div>
        <SocialIcons />
      </div>
    </>
  )
}
