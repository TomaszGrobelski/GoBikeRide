interface IRoadTabelContainter {
    children: React.ReactNode;
}
const RoadTabelContainter = ({ children }: IRoadTabelContainter) => {
    return (
        <div className='flex h-screen w-full max-w-7xl flex-col justify-center gap-4 rounded-md p-4'>{children}</div>
    );
};

export default RoadTabelContainter;
