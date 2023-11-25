// import { UserAuthForm } from '@/app/examples/authentication/components/user-auth-form'
import { FC } from 'react'
import { Link } from 'react-router-dom'

import { LoginForm } from '@/components/common/LoginForm'

export const LoginPage: FC = () => {
  return (
    <>
      <div className="container h-[600px] flex-col items-center justify-center flex sm:h-[800px]">
        <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[360px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Создать аккаунт
            </h1>
            <p className="text-sm text-muted-foreground">
              Введите ваш email и пароль
            </p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Нажимая «Продолжить», вы соглашаетесь с
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              {' '}
              политикой конфиденциальности
            </Link>{' '}
            и{' '}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              условиями использования
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  )
}
