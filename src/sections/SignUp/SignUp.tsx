'use client';

import Link from 'next/link';

import '../../styles/global.css';

import { useRouter } from 'next/navigation';
import { endpoints } from '@/api/endpoints/endpoints';
import { useRegistration } from '@/contexts/RegistrationContext';
import { paths } from '@/routes/paths';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/atmos/form';
import { Input } from '@/ui/atmos/Form/Input';
import SubmitButton from '@/ui/atmos/SubmitButton';
import CustomToaster from '@/ui/atmos/Toaster/CustomToaster';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react/dist/iconify.js';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { supabase } from '@/lib/supabase';
import { useBoolean } from '@/hooks/use-Boolean';

import { RegisterFormSchema } from './form.schema';

// CI/CD dodać do projektu

const SignUp = () => {
    const router = useRouter();
    const { setRegisteredSuccessfully } = useRegistration();
    const isSubmitting = useBoolean(false);

    const form = useForm<z.infer<typeof RegisterFormSchema>>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    const onSubmit = async (values: z.infer<typeof RegisterFormSchema>) => {
        isSubmitting.setTrue();

        const { email, password, username } = values;
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                toast.error('Użytkownicy mogą założyć jedno konto raz na 30 minuty');
            } else if (data) {
                const userId = data.user?.id;
                try {
                    const response = await axios.post(endpoints.user.all, {
                        id: userId,
                        email,
                        username,
                        password,
                    });

                    if (response.status === 201) {
                        router.push(paths.dashboard.home);
                        setRegisteredSuccessfully(true);
                        toast.success('Konto zostało pomyślnie utworzone. Zaloguj się, aby kontynuować.');
                    } else {
                        toast.error(`Wystąpił błąd podczas rejestracji: ${response.data.message}`);
                    }
                } catch (error: any) {
                    toast.error(`Wystąpił błąd podczas rejestracji: ${error.response?.data?.message || error.message}`);
                    console.error('Błąd podczas rejestracji:', error);
                }
            }
        } catch (error: any) {
            toast.error('Wystąpił błąd podczas rejestracji.');
        } finally {
            isSubmitting.setFalse();
        }
    };

    return (
        <>
            <div className='flex h-full w-1/2 items-center justify-center'>
                <Form {...form}>
                    <form className='flex flex-col gap-3' onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name='username'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nazwa użytkownika</FormLabel>
                                    <FormControl>
                                        <Input placeholder='username' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
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
                                    <FormLabel>Hasło</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder='Wprowadź hasło' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='confirmPassword'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Powtórz hasło</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder='Powtórz swoje hasło' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <SubmitButton disabled={isSubmitting.value}>
                            {isSubmitting.value ? (
                                <Icon icon='line-md:loading-loop' fontSize={22} />
                            ) : (
                                <p>Zarejestrój</p>
                            )}
                        </SubmitButton>
                    </form>
                </Form>
            </div>
            <div className='flex h-full w-1/2 flex-col items-center justify-center space-y-6 rounded-br-lg rounded-tr-lg bg-gradient-to-br from-[#38B98C] to-[#3AA8AE] font-poppins text-[14px] text-white'>
                <h2 className='text-center text-[50px] font-semibold'>Masz już konto ?</h2>
                <Link href={paths.auth.signIn}>
                    <button className='rounded-full bg-white px-9 py-4 font-bold tracking-wider text-black'>
                        Powrot do logowania
                    </button>
                </Link>
            </div>

            <CustomToaster />
        </>
    );
};

export default SignUp;
