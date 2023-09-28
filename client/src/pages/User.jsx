import { useEffect } from 'react';
import { useParams, NavLink, Navigate } from 'react-router-dom';

import ShareMeSLogo from '../assets/images/logos/share-me-s-logo.png';
import CustomLink from '../components/links/CustomLink';
import GalaxyBG from '../assets/images/backgrounds/galaxy.jpg';
import useAxios from '../hooks/useAxios';
import LoadingScreen from '../components/LoadingScreen';

function User({ setShowNav }) {
	const params = useParams();
	

	const {loading, data, error } = useAxios('GET','/user', params.username);


	useEffect(() => {
		setShowNav(false);
		
	}, []);

	const linkData = [
		{
			type: 'neon',
			color: '#FF8D40',
			url: 'https://www.instagram.com/eppesmedia/?hl=en',
			linkText: 'Instagram',
			rounded: true,
		},
		{
			type: 'basicTransparent',
			color: '#2DD8FF',
			url: 'https://www.youtube.com/watch?v=qfV92TG3pYA',
			linkText: 'Youtube',
			rounded: true,
		},
	];

	return (
		<>
			{/* If the user or page is not found, navigate to the not found page */}
			{loading && <LoadingScreen />}
			{error && <Navigate to="/not-found" replace={true} />}

			{data && (
				<div className={`h-[100dvh] flex justify-center relative`}>
					<NavLink
						to="/studio"
						className="absolute top-8 right-4 z-10 bg-slate-200 px-2 rounded-xl cursor-pointer"
					>
						Edit
					</NavLink>
					<div className="fixed top-0 left-0 w-full h-full">
						<img src={GalaxyBG} alt="" className="w-full h-full object-cover" />
					</div>
					<div className="relative z-10 w-full max-w-[650px] h-full max-h-auto flex flex-col items-center py-6 px-8">
						<div className="w-[80px] h-[80px] rounded-[50%] border p-2 mb-4">
							<img
								src={ShareMeSLogo}
								alt=""
								className="h-full w-full object-cover"
							/>
						</div>
						<p className="mb-2 text-slate-50">{`@${data?.username}`}</p>
						<p className="text-center text-slate-50 pb-12">{data?.bio}</p>

						<div className="w-full flex flex-col items-center">
							{linkData.map((data, i) => (
								<CustomLink key={i} data={data} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default User;
