interface IRoadTabelContainter {
    children: React.ReactNode;
}
const RoadTabelContainter = ({ children }: IRoadTabelContainter) => {
    return <div className='flex h-screen flex-col gap-4 rounded-md p-4'>{children}</div>;
};

export default RoadTabelContainter;
