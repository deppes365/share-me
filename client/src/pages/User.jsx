import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ShareMeSLogo from '../assets/images/logos/share-me-s-logo.png';
import CustomLink from '../components/links/CustomLink';
import GalaxyBG from '../assets/images/backgrounds/galaxy.jpg';

function User({ setShowNav }) {
	const params = useParams();

	useEffect(() => {
		setShowNav(false);
	}, []);

	const linkData = [
		{
			type: 'basicTransparent',
			color: '#FF8D40',
			url: 'https://www.instagram.com/eppesmedia/?hl=en',
			linkText: 'Instagram',
            rounded: true           
		},
		{
			type: 'basicTransparent',
			color: '#2DD8FF',
			url: 'https://www.youtube.com/watch?v=qfV92TG3pYA',
			linkText: 'Youtube',
            rounded: true 
		},
	];

	return (
		<div className={`h-[100dvh] flex justify-center relative`}>
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
				<p className="mb-2 text-slate-50">{`@${params.slug}`}</p>
				<p className="text-center text-slate-50 pb-12">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
					commodi sunt placeat animi cum quo repudiandae iure reiciendis
					incidunt ipsum atque repellendus saepe, in pariatur?
				</p>
				<div className="w-full flex flex-col items-center">
					{linkData.map((data, i) => (<CustomLink key={i} data={data} />))}
				</div>
			</div>
		</div>
	);
}



export default User;
