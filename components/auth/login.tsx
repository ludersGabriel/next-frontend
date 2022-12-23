
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useAuth } from '../../context/auth.context'
import { LoginInput } from '../../graphql/types'
import { Button } from '../../styles/global'
import { FormWrapper, Input, InputWrapper } from './style'

// ! note: never ship this to production
const defaultValues: LoginInput = {
  username: 'admin',
  password: '1234mudar',
  device: undefined
}

const Login = () => {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm<LoginInput>({ defaultValues })

  const { signIn } = useAuth()
  const router = useRouter()

  const onSubmit = async (data: LoginInput) => {
    signIn(data)
      .then(res => {
        router.push('/dashboard')
      })
      .catch(() => toast.error(
        'Credenciais erradas ou usuário não encontrado',
        { icon: '🤔', style: { color: 'red' } }
      ))
  }

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Input
          type="text"
          placeholder={!errors.username ? 'Username' : errors.username.message}
          {...register('username', {
            required: {
              value: true,
              message: 'Username is required'
            },
            minLength: {
              value: 3,
              message: 'Username must be at least 3 characters'
            },
            maxLength: {
              value: 20,
              message: 'Username must be at most 20 characters'
            }
          })}
          error={!!errors.username}
          autoFocus
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          type="password"
          placeholder={!errors?.password ? 'Password' : errors?.password?.message}
          {...register('password', {
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters'
            },
            maxLength: {
              value: 50,
              message: 'Password must have less than 50 characters'
            },
            required: {
              value: true,
              message: 'Password is required'
            }
          })}
          error={!!errors.password}
        />
      </InputWrapper >

      <Button>submit</Button>
    </FormWrapper >
  )

}

export default Login