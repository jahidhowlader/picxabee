import Image from 'next/image';
import React from 'react';
import dp from '/public/admin.jpg'
import { IoSettingsOutline } from 'react-icons/io5';
import { BsFillGridFill } from 'react-icons/bs';
import { BiSolidBookmarkAlt } from 'react-icons/bi';
import { FaHistory } from 'react-icons/fa';
import ProfileStories from './ProfileStories';
import ProfilePosts from './ProfilePosts';
const ProfileSection = () => {
    return (
        <div className='max-w-6xl mx-5 p-10 xl:mx-auto'>
            <div className='grid grid-cols-4 gap-4'>
                <div className="avatar justify-center">
                    <div className="rounded-full w-36 h-36">
                        <Image src={dp} alt='profile-pic' />
                    </div>
                </div>
                <div className='col-span-2'>
                    <span className="font-bold text-3xl-mr-4">
                       Hridoy Hoque
                    </span>
                    <div className="ml-2 cursor-pointer inline text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 rounded mr-4">Edit Profile  <IoSettingsOutline className="cursor-pointer h-6 inline" /></div>
                   
                    <div className='mt-4 flex'>
                        <div><span className='font-semibold'>150</span> posts</div>
                        <div className='ml-4'><span className='font-semibold'>200</span> followers</div>
                        <div className="ml-4"><span className='font-semibold'>180</span> Following</div>
                    </div>
                  <div>
                      <div className='pt-2'>
                <span className='text-lg from-neutral-300 text-gray-600'>Mern Stack Developer </span>
               </div>
                    <div>
                <span className='text-1xl from-neutral-300  text-gray-600'>Student of programming Hero Batch 7 </span>
               </div>
                  </div>
                </div>
            </div>
        <div className='pt-9'>
        <ProfileStories />
        </div>
        <hr className='border-gray-500 mt-6'/>
        <div className="flex justify-center gap-16 -mt-[0.5px]">
            <button className='focus:border-t border-gray-800 py-2 text-sm font-semibold flex gap-2'><BsFillGridFill className='mt-1'/> Posts</button>
            <button className='focus:border-t border-gray-800 py-2 text-sm font-semibold flex gap-2'><BiSolidBookmarkAlt className='mt-1'/>Saved</button>
            <button className='focus:border-t border-gray-800 py-2 text-sm font-semibold flex gap-2'><FaHistory className='mt-1'/>all stories</button>
        </div>
        <ProfilePosts />
        </div>
    );
};

export default ProfileSection;