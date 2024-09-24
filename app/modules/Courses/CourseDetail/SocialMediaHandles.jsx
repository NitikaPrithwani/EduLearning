"use client"
import React from 'react';
import { FaFacebookF } from 'react-icons/fa6';
import { FaTwitter } from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { SocialMediaHandlesData } from '@/static-data/SocialMediaHandles';
import { FacebookShareButton, TwitterShareButton } from 'react-share';

export default function SocialMediaHandles({ courseDetail }) {
    const title = `${courseDetail[0].category}`;
    const url = window.location.href;


    return (
        <div className="md:container md:w-4/5 md:mx-auto flex mb-5 md:mt-10 mt-5">
            <p className="font-bold md:text-xl text-lg text-gray-500 mt-1">Share: </p>
            {SocialMediaHandlesData.map((socialHandles, index) => (
                <div key={index} className="flex">
                    {socialHandles.facebookUrl && (
                        <FacebookShareButton url={url} quote={title} >
                            <FaFacebookF className="bg-blue-800 text-white rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px] md:p-2 p-1 ms-5 md:mt-0 mt-2" />
                        </FacebookShareButton>
                    )}
                    {socialHandles.twitterUrl && (
                        <TwitterShareButton url={url} title={title}>
                            <FaTwitter className="bg-blue-400 text-white rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px] md:p-2 p-1 ms-5 md:mt-0 mt-2" />
                        </TwitterShareButton>
                    )}
                    {socialHandles.googlePlusUrl && (
                        <a>
                            <TiSocialGooglePlus className="bg-orange-600 text-white rounded-full md:w-[40px] md:h-[40px] w-[20px] h-[20px] md:p-2 p-1 ms-5 md:mt-0 mt-2" />
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
}
