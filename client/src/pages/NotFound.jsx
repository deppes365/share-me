import { useEffect } from "react";

function NotFound({setShowNav}) {
    useEffect(() => {
        setShowNav(false);
    }, [])

	return (
		<div>
			<h1 className="text-black">Oops</h1>
		</div>
	);
}

export default NotFound;
