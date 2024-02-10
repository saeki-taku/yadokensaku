// components
import TopHero from "./components/TopHero";
import TopMain from "./components/TopMain";

const Top = (pageData: ANY_OBJECT) => {
	return (
		<>
			<TopHero />
			<TopMain pageData={pageData} />
		</>
	);
};

export default Top;
