'use client';

import '../../styles/global.css';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/contexts/RegistrationContext';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/atmos/form';
import { Input } from '@/ui/atmos/Form/Input';
import SubmitButton from '@/ui/atmos/SubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';
import * as z from 'zod';

import { useBoolean } from '@/hooks/use-Boolean';
import { signInAction } from '@/app/api/auth/singin';

import CustomLine from './CustomLine';
import { LoginFormSchema } from './form.schema';
import RegistrationBox from './RegistrationBox';
import SignInHeader from './SignInHeader';
import SocialLogin from './SocialLogin';

type FormValues = z.infer<typeof LoginFormSchema>;

const SignIn = () => {
  const router = useRouter();
  const toastMounted = useBoolean();
  const { registeredSuccessfully, setRegisteredSuccessfully } =
    useRegistration();

  useEffect(() => {
    toastMounted.setTrue();
    if (toastMounted.value && registeredSuccessfully) {
      toast.success('Pomyślnie utworzono konto');
      setRegisteredSuccessfully(false);
    }
  }, [registeredSuccessfully, setRegisteredSuccessfully, toastMounted, router]);

  const form = useForm<FormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (formData: FormValues) => {
    try {
      const { message, success, session } = await signInAction(formData);
      console.log(session, 'nmowa');

      if (!success) {
        console.error('Błąd logowania:', message);
        toast.error('Nie udało się zalogować. Sprawdź dane logowania.');
      } else if (success) {
        console.log('Succes logged', message);
        router.push('/dashboard/hero');
      }
    } catch (error) {
      console.error('Błąd logowania:', error);
      toast.error('Wystąpił błąd podczas logowania.');
    }
  };

  return (
    <>
      <div className='flex h-full w-1/2 flex-col items-center justify-center gap-4'>
        <SignInHeader />
        <SocialLogin />
        <CustomLine />

        <Form {...form}>
          <form
            className='flex flex-col gap-3'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='mail@przykład.pl' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Wprowadź swoje hasło'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton>Zaloguj</SubmitButton>
          </form>
        </Form>
      </div>

      <RegistrationBox />

      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.2rem'
          }
        }}
        richColors
        position='top-right'
      />
    </>
  );
};

export default SignIn;
