import React from 'react';
import Stories from './ProfileStories.json'
import ProfileStory from './ProfileStory';
import { BiRightArrowAlt, BiLeftArrowAlt } from 'react-icons/bi';
const ProfileStories = () => {
    return (
        <div className='relative w-full'>
            <div className='flex space-x-6 overflow-x w-ful border-gray-200 p-4 scroll-smooth scrollbar-hide'>
                {Stories.map(story => <ProfileStory
                    key={story.id}
                    img={story.image}
                    username={story.first_name + story.last_name}
                />)}
            </div>
            <div className='absolute top-0 p-4 w-full flex justify-between z-10 items-center'>
                <BiLeftArrowAlt color='white' className='cursor-pointer drop-shadow-lg' />
                <BiRightArrowAlt color='white' className='cursor-pointer drop-shadow-lg' />
            </div>
        </div>
    );
};

export default ProfileStories;