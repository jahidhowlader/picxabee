'use client';
import Image from 'next/image';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { AiFillHeart, AiOutlineComment, AiOutlineHeart } from 'react-icons/ai';
import { BsSave, BsThreeDots } from 'react-icons/bs';
import { PiShareFat } from 'react-icons/pi';
import CommentSection from './CommentSection';
import EditOption from './EditOption';
import SingleComment from './SingleComment';
import useAuth from '@/hooks/useAuth';
import AuthContext from '@/context/AuthContext';

const SinglePost = ({ post }) => {
	const [react, setReact] = useState(false);
	const [open, setOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { user } = useAuth(AuthContext);
	const { _id: id } = post;

	const isReacted = post.reactions.some((reaction) => {
		return reaction?.author?.email === user?.email;
	});

	const isButtonDisabled = post?.author?.email !== user?.email;

	// console.log(isReacted);

	const date1 = new Date(post?.createdAt);
	const options = { timeStyle: 'short', dateStyle: 'medium' };
	const formattedDateTime = date1.toLocaleString(undefined, options);

	function closeModal() {
		setIsOpen(false);
	}
	function openModal() {
		setIsOpen(true);
	}

	const handleReaction = () => {
		const NewReaction = {
			id,
			author: {
				email: user?.email,
				name: user?.displayName,
				profile_picture: user?.photoURL,
			},
			reaction: 1,
		};
		// console.log(NewReaction);

		fetch('/api/posts', {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(NewReaction),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then((data) => {
				console.log('Received data:', data);
			})
			.catch((error) => {
				console.error('Fetch error:', error);
			});
	};

	const handleBookmark = () => {
		fetch(`/api/users/bookmarks?userEmail=${user?.email}&postId=${id}`, {
			method: 'PATCH',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then((data) => {
				if (data.message == 'Post bookmarked successfully') {
					toast.success(data.message);
				} else {
					toast.error(data.message);
				}

				console.log('Received data:', data);
			})
			.catch((error) => {
				console.warning('Fetch error:', error);
			});
	};
	return (
		<div data-aos="fade-up" className="lg:px-0 border border-2 rounded-md mb-3">
			<div className="w-full flex items-center justify-between p-2">
				<div className="flex items-center ml-3 mt-4">
					<Image
						src={post?.author?.profile_picture}
						width={50}
						height={50}
						alt="Picture of the author"
						className="rounded-full h-12 w-12 object-cover border p-1 mr-3"
					/>
					<div>
						<p className="font-bold capitalize">{post?.author?.name}</p>
						<p className="font-normal text-sm ">{formattedDateTime}</p>
					</div>
				</div>
				<div>
					{isButtonDisabled ? (
						<button disabled>
							<BsThreeDots
								size={28}
								className="text-gray-400 cursor-not-allowed"
							/>
						</button>
					) : (
						<button onClick={openModal}>
							<BsThreeDots
								size={28}
								className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
							/>
						</button>
					)}
</div>				
				<EditOption
					id={id}
					post={post}
					closeModal={closeModal}
					openModal={openModal}
					isOpen={isOpen}
				></EditOption>
			</div>
			{post?.content && <h1 className="px-5 py-3">{post?.content}</h1>}
			{post?.image && (
				<Image
					src={post?.image}
					width={600}
					height={500}
					alt="Posted Image"
					className="object-contain border-none w-full h-[500px]" //object-contain
				/>
			)}
			<div className="flex justify-end px-5 pt-2 pb-6 mr-4 pb">
				<div className="flex items-center justify-between gap-x-[9px]">
					<BsSave
						onClick={handleBookmark}
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<AiOutlineComment
						onClick={() => setOpen(!open)}
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<p className="font-semibold text-lg">
						{post?.comments && post?.comments.length}
					</p>
					<PiShareFat
						size={26}
						className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
					/>
					<div className="flex gap-x-1">
					{react ? (
						<AiFillHeart
							onClick={() => handleRemoveReaction('tasnim@gmail.com')}
							size={26}
							className="hover:scale-125 duration-300 hover:text-red-400 hover:cursor-pointer text-red-500"
						/>
					) : (
						<AiOutlineHeart
							onClick={handleReaction}
							size={26}
							className="hover:scale-125 duration-300 hover:text-gray-400 hover:cursor-pointer"
						/>
					)}
					<p className="font-semibold text-lg">
						{post?.reactions && post?.reactions.length}
					</p>
					</div>
				</div>
			</div>

			<div>
				{post?.comments?.reverse().map((comment, i) => (
					// Check if the index is greater than or equal to 1
					<SingleComment
						key={i}
						comment={comment}
						id={post._id}
					></SingleComment>
				))}
			</div>
			<div className="px-5 pb-5 ">
				<CommentSection id={post._id} open={open}></CommentSection>
			</div>
		</div>
	);
};

export default SinglePost;
