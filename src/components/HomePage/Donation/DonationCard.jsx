import React from 'react';
import { checkout } from '@/hooks/checkout';
import Image from 'next/image';

const DonationCard = ({
	title,
	imageUrl,
	totalDonated,
	userProfileImage,
	username,
}) => {
	const handlePaymentSuccess = async () => {
		try {
			const paymentResponse = await checkout({
				lineItems: [{ price: 'price_1Nn2TMIfrNNr5g42vzeaIzwf', quantity: 1 }],
			});
		} catch (error) {
			console.error('Payment error:', error);
		}
	};

	return (
		<div className="mb-3">
			<div className="card glass rounded-md">
				<Image
					src={imageUrl}
					alt="donate"
					layout="responsive"
					width={400}
					height={300}
					className="card-image rounded-md"
				/>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>

					{/* Display user profile picture and username */}
					<div className="flex items-center mt-3">
						<div className="w-8 h-8 rounded-full mr-2 overflow-hidden">
							<Image
								src={userProfileImage}
								alt="User Profile"
								layout="responsive"
								width={32}
								height={32}
							/>
						</div>
						<span className="text-sm font-semibold">{username}</span>
					</div>

					<div className="card-actions mt-3">
						<div>
							{/* <div className="card-action">
                                <button
                                    className="btn rounded-md hover:bg-primary-color hover:text-white border-gray font-semibold lg:ml-5 capitalize dark:border-white dark:hover:bg-black"
                                >
                                    Total Donated {totalDonated}$
                                </button>
                            </div> */}
							<div className="card-action">
								<button
									onClick={handlePaymentSuccess}
									className="h-12 w-28 bg-primary-color hover:bg-teal-700 border-teal-500 text-white
             rounded-md hover:text-white dark:bg-black hover:border-white dark:hover:bg-[#2a0f17] hover:scale-105 transition duration-300 ease-in-out"
								>
									Donate now
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DonationCard;
