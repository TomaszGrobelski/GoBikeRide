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

const SignIn = () => {
  const router = useRouter();

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
      router.push('/sign-in');
      console.log('puszuje do sign-in');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <>
      <Form {...form}>
        <form className='flex flex-col' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder='mail@example.com' {...field} />
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
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Link
              href='/dashboard/hero'
              className='rounded-md bg-[#EA9E41] p-2 text-[1.1rem] font-bold text-white'
            > */}
          <button type='submit'>Zaloguj</button>
          {/* </Link> */}
        </form>
      </Form>
      <div className='text-[14px]'>
        <p>Jeśli jeszcze nie masz konta:</p>
        <Link href='/auth/sign-up'>
          <button className='text-blue-700'>Zarejestruj się</button>
        </Link>
      </div>
    </>
  );
};

export default SignIn;
