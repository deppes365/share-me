import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CustomLink({ data }) {
	const [hoverActive, setHoverActive] = useState(false);

	// const linkstyles = {
	// 	base: {
	// 		boxShadow: `0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 1rem ${color}, 0 0 0.8rem ${color}, 0 0 2.8rem ${color}, inset 0 0 1.7rem ${color}`,
	// 	},
	// 	hover: {
	// 		boxShadow: `0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem ${color}, 0 0 0.8rem ${color}, 0 0 2.8rem ${color}, inset 0 0 1.3rem ${color}`,
	// 	},
	// };

	const { type, color, rounded, url, linkText } = data;

	const linkstyles = {
		neon: {
			base: {
				boxShadow: `0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 0.5rem ${color}, 0 0 0.4rem ${color}, 0 0 2rem ${color}, inset 0 0 1.3rem ${color}`,
				border: '2px solid #fff',
			},
			hover: {
				boxShadow: `0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 1rem ${color}, 0 0 0.4rem ${color}, 0 0 2.4rem ${color}, inset 0 0 1.7rem ${color}`,
				border: '2px solid #fff',
			},
			text: {
				textShadow: `0 0 1px #fff, 0 0 2px #fff, 0 0 1px #fff, 0 0 5px ${color}, 0 0 30px ${color}, 0 0 40px ${color}, 0 0 35px ${color}, 0 0 40px ${color}`,
				letterSpacing: '0.05em',
				fontFamily: 'Sacramento, sans-serif',
				fontSize: '1.5rem',
			},
		},
		basicTransparent: {
			base: {
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				backdropFilter: 'blur(2px)',
				paddingTop: '0.5rem',
				paddingBottom: '0.5rem',
			},
			hover: {
				backgroundColor: 'rgba(255, 255, 255, 0.5)',
				backdropFilter: 'blur(2px)',
				paddingTop: '0.5rem',
				paddingBottom: '0.5rem',
			},
			text: {
				fontFamily: 'MegaTrans, sans-serif',
				letterSpacing: '0.05em'
			},
		},
	};

	const handleMouseEnter = () => {
		setHoverActive(true);
	};

	const handleMouseLeave = () => {
		setHoverActive(false);
	};

	return (
		<Link
			className={`flex justify-center w-full py-1 px-8 mb-6 ${
				rounded ? 'rounded-[30px]' : ''
			} duration-200`}
			style={hoverActive ? linkstyles[type].hover : linkstyles[type].base}
			to={`${url}`}
			target="_blank"
			rel="noreferrer"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<span className="text-slate-50" style={linkstyles[type].text}>
				{linkText}
			</span>
		</Link>
	);
}

CustomLink.propTypes = {
	data: PropTypes.object,
};

export default CustomLink;
