"use client";
import React from 'react';
import { FaComments, FaEye, FaFacebook, FaHeart, FaLinkedin, FaTwitter, FaUser } from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

import { useSelector, useDispatch } from 'react-redux';

export default function SocialMediaHandles({ newsDetail }) {
    const url = window.location.href;
    const title = `${newsDetail[0].title}`;

    const dispatch = useDispatch();
    const likes = useSelector((state) => {
        const likeItem = state.counter.likes.find(item => item.id === newsDetail[0].id);
        return likeItem ? likeItem.likesNo : 0;
    });

    return (
        <div className="md:flex justify-between mb-8 grid grid-cols-1">
            <div className="md:flex grid grid-cols-1">
                <div className="flex">
                    <FaComments className="mt-1 text-gray-500" />
                    <p className="ps-2 pe-2 md:pe-8 mb-4 text-gray-500">{newsDetail[0].comments.length} Comments</p>
                    <FaEye className="mt-1 text-gray-500" />
                    <p className="ps-2 pe-2 md:pe-8 text-gray-500">784 Views</p>
                    <FaHeart className="mt-1 text-gray-500" />
                    <p className="ps-2 pe-2 md:pe-8 text-gray-500">{likes}</p>
                </div>

                <div className="flex">
                    <FaUser className="mt-1 text-gray-500" />
                    <p className="ps-2 pe-1 text-gray-500">Posted by {newsDetail[0].PostedBy}</p>
                    <button className="text-xs mb-5 ps-1 pe-1 mt-1 bg-blue-500 text-white">JUNE 07</button>
                </div>
            </div>
            <div className="flex items-center">
                <h2 className="font-bold mr-4">SHARE:</h2>
                <FacebookShareButton url={url} quote={title}>
                    <FaFacebook className="text-blue-500 md:w-[30px] md:h-[30px] w-[20px] h-[20px] md:p-1 p-1 ms-2 mt-1" />
                </FacebookShareButton>
                <TwitterShareButton url={url} title={title}>
                    <FaTwitter className="text-blue-500 md:w-[30px] md:h-[30px] w-[20px] h-[20px] md:p-1 p-1 ms-2 mt-1" />
                </TwitterShareButton>
                <LinkedinShareButton url={url}>
                    <FaLinkedin className="text-blue-500 md:w-[30px] md:h-[30px] w-[20px] h-[20px] md:p-1 p-1 ms-2 mt-1" />
                </LinkedinShareButton>
            </div>
        </div>
    );
}