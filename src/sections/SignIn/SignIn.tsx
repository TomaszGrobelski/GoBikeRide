'use client';

import Link from 'next/link';
import '../../styles/global.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { FormSchema } from './form.schema';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/ui/atmos/form';
import { Input } from '@/ui/atmos/Form/Input';
import SubmitButton from '@/ui/atmos/SubmitButton';
import { useRegistration } from '@/contexts/RegistrationContext';
import { Toaster, toast } from 'sonner';
import { useEffect } from 'react';
import { useBoolean } from '@/hooks/use-Boolean';
import IconButton from '@/ui/atmos/IconButton';

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
        <h1 className='text-center text-[50px]'>
          Zaloguj się do swojego konta
        </h1>
        <p className='text-center text-[20px]'>
          Zaloguj się za pomocą portali społecznościowych
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
        <h2 className='text-center  text-[50px]'>Jesteś nowy ?</h2>
        <p className='text-center text-[20px]'>
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
