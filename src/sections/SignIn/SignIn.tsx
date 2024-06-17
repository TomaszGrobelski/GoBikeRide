'use client';

import Link from 'next/link';

import '../../styles/global.css';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/contexts/RegistrationContext';
import { FormSchema } from '@/sections/SignIn/form.schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/atmos/form';
import { Input } from '@/ui/atmos/Form/Input';
import IconButton from '@/ui/atmos/IconButton';
import SubmitButton from '@/ui/atmos/SubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
// import { parseCookies, setCookie } from 'nookies';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';
import * as z from 'zod';

import { useBoolean } from '@/hooks/use-Boolean';

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
  }, [registeredSuccessfully, setRegisteredSuccessfully, toastMounted]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password
      })
    });

    if (response.ok) {
      // const expires = new Date(Date.now() + 10 * 1000);
      // const session = await encrypt({ user, expires });
      // cookies().set('session', session, { expires, httpOnly: true });

      router.push('/dashboard/hero');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.2rem'
          }
        }}
        richColors
        position='top-right'
      />
      <div className='flex h-full w-1/2 flex-col items-center justify-center gap-4'>
        <h1 className='text-center text-[20px] md:text-[40px]'>
          Zaloguj się do swojego konta
        </h1>
        <p className='text-center text-[18px] md:text-[20px]'>
          Zaloguj się za pomocą portalu społecznościowego
        </p>
        <div className='flex items-center gap-4'>
          <IconButton
            icon='ic:sharp-facebook'
            ariaLabel='Zaloguj się za pomocą facebooka'
            color='#4267B2'
            size={50}
          />
          <IconButton
            icon='devicon:google'
            ariaLabel='Zaloguj się za pomocą facebooka'
            color='#4267B2'
            size={35}
          />
        </div>
        <div className='flex w-full justify-center gap-2'>
          <div className='mb-3 w-[40%] border-b-[1px] border-[#38B98C]'></div>
          <span>lub</span>
          <div className='mb-3 w-[40%] border-b-[1px] border-[#38B98C]'></div>
        </div>
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
            <Link href='/dashboard/hero' className='w-full'>
              <SubmitButton>Zaloguj</SubmitButton>
            </Link>
          </form>
        </Form>
      </div>
      <div className='flex h-full w-1/2 flex-col items-center justify-center space-y-4 rounded-br-lg rounded-tr-lg bg-gradient-to-br from-[#38B98C] to-[#3AA8AE] text-[14px]  text-white'>
        <h2 className='text-center text-[20px] md:text-[40px]'>
          Jesteś nowy ?
        </h2>
        <p className='text-center text-[18px]  md:text-[20px]'>
          Zarejestruj się i odkryj mnóstwo nowych możliwości !{' '}
        </p>
        <Link href='/auth/sign-up'>
          <button className='rounded-full bg-white  px-9 py-4 font-bold text-black'>
            Zarejestruj się
          </button>
        </Link>
      </div>
    </>
  );
};

export default SignIn;
