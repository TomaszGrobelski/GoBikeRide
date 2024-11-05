import { Toaster } from 'sonner';

const CustomToaster = () => {
    return (
        <Toaster
            toastOptions={{
                style: {
                    marginTop: '3rem',
                    fontSize: '1.2rem',
                },
            }}
            richColors
            position='top-right'
        />
    );
};

export default CustomToaster;
