export default function Home() {
	return (
		<div className="font-sans bg-gray-100">
			<header className="text-gray-600 body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
						<a href="#how-it-works" className="mr-5 hover:text-gray-900">How It Works</a>
						<a href="#gallery" className="mr-5 hover:text-gray-900">Gallery</a>
						<a href="#pricing" className="mr-5 hover:text-gray-900">Pricing</a>
						<a href="#contact" className="hover:text-gray-900">Contact Us</a>
					</nav>
				</div>
			</header>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
					<div className="text-center lg:w-2/3 w-full">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Bringing Your Memories Back to Life on the Blockchain
						</h1>
						<p className="mb-8 leading-relaxed">
							Revitalize your cherished black and white photos with vivid colors and preserve them forever on the Bitcoin blockchain.
						</p>
					</div>
				</div>
			</section>

			<section id="how-it-works" className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="text-center mb-20">
						<h2 className="text-2xl font-medium title-font text-gray-900 mb-4">
							How ColorMint Works
						</h2>
						<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
							Follow these simple steps to transform your photos and store them securely on the blockchain.
						</p>
						<p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
							P.S. We are in closed beta. Please fill following google form, we will mail you your photos back.
							<a href="https://forms.gle/2NYpQz28kkjmU93W9" target="_blank">Google Form</a>
						</p>
					</div>
				</div>
			</section>

			<section id="gallery" className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-wrap -m-4">
					</div>
				</div>
			</section>

			<section id="pricing" className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">

				</div>
			</section>

			<section id="contact" className="text-gray-600 body-font relative">
				<div className="container px-5 py-24 mx-auto">
				</div>
			</section>

			<footer className="text-gray-600 body-font">
				<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
						© 2023 ColorMint —
						<a href="#" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@ColorMint</a>
					</p>
				</div>
			</footer>
		</div>
	)
}
