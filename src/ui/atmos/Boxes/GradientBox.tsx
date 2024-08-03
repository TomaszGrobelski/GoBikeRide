interface IGradientBox {
  children: React.ReactNode;
}
const GradientBox = ({ children }: IGradientBox) => {
  return (
    <div className='w-ful relative mx-5 mt-20 z-20 flex min-h-[500px] max-w-[1100px] flex-col items-center justify-center gap-10 overflow-hidden rounded-3xl   bg-mainPurple '>
      <div className='absolute bottom-[-550px] left-1/2 -z-10 h-[800px] w-[100%] -translate-x-1/2 transform rounded-full bg-[#010314] blur-2xl'></div>
      {children}
    </div>
  );
};

export default GradientBox;
