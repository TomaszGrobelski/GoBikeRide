interface IErrorCard {
  refetch?: VoidFunction;
}
const ErrorCard = ({ refetch }: IErrorCard) => {
  return (
    <div className='flex h-1/2 flex-col items-center justify-center'>
      <div className='border-mainColor flex flex-col items-center justify-center gap-6 rounded-lg border-[1px] p-10'>
        <p className='max-w-[500px] text-center'>
          Coś poszło nie tak, spróbuj odświeżyć stronę lub skontaktuj się z
          naszym działem pomocy. Za wszelie problemy przepraszamy.
        </p>
        <span>support@gobikeride.com</span>
        <button
          onClick={refetch}
          className='bg-mainColor rounded-full border-[1px] p-2 text-white'
        >
          Spróbuj ponownie
        </button>
      </div>
    </div>
  );
};

export default ErrorCard;
