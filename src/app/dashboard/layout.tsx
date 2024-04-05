import Nav from '@/ui/organisms/Navigation/Nav';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='flex gap-20'>
      <Nav />
      <div >{children}</div>
    </div>
  );
};

export default Layout;
