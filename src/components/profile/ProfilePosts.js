import React from 'react';
import post1 from "/public/post1.PNG";
import post2 from "/public/post2.PNG";
import post3 from "/public/post3.PNG";
import post4 from "/public/post4.PNG";
import post5 from "/public/post5.PNG";
import post6 from "/public/post6.PNG";
import post7 from "/public/post7.PNG";
import post8 from "/public/post8.PNG";

import Image from "next/image";
import { VscHeart } from 'react-icons/vsc';
import { FaRegComments } from 'react-icons/fa';
const ProfilePosts = () => {

    const posts = [

        { img: post1, id: 1,  },
        { img: post2, id: 2,  },
        { img: post3, id: 3,  },
        { img: post4, id: 5,  },
        { img: post5, id: 5,  },
        { img: post6, id: 5,  },
        { img: post7, id: 5,  },
        { img: post8, id: 5,  },
    ]
    return (
        <div className='grid grid-cols-3 gap-4 mt-3'>
            {posts.map((image, idx) => <div  className='relative group cursor-pointer' key={idx}>
                <div className='h-64 overflow-hidden'
              >
                <div className='relative h-64'>
                <Image layout='fll' objectFit='cover' src={image.img} alt="" />
                </div>
            </div>
            <div className='absolute top-0 opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 w-full h-full bg-black-rgba flex text-white justify-center items-center space-x-3'>
              <div className="space-x-1">
                <VscHeart color='white' className='h-6 inline'/>
                <span className='text-neutral-200'>6</span>
              </div>
              <div className="space-x-1">
                <FaRegComments color='white'/>
                <span className='text-neutral-200'>1</span>
              </div>
            </div>
            </div>)}
        </div>
    );
};

export default ProfilePosts;