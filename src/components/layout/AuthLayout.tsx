// import { UserAuthForm } from '@/app/examples/authentication/components/user-auth-form'
import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const AuthLayout: FC = () => {
  return (
    <>
      <div className="container h-[600px] flex-col items-center justify-center flex sm:h-[800px]">
        <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[360px]">
          <Outlet />
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
