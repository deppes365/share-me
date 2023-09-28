import { TailSpin } from 'react-loader-spinner';

function LoadingScreen() {
	return (
		<div className='absolute top-0 left-0 w-full h-full flex justify-center items-center' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(3px)', zIndex: '15'}}>
			<TailSpin
				height="300"
				width="300"
				color="#00F5D4"
				ariaLabel="tail-spin-loading"
				radius="1"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);
}

export default LoadingScreen;
