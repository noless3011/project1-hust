'use client';

import { CreateRatingDto } from '@/api';
import { RatingResponse } from '@/app/types/Review';
import { RatingApi } from '@/app/utils/ApiClient';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface Rating {
    stars: number;
    count: number;
}


const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill={filled ? "#FFD700" : "#D3D3D3"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.91 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
);

const Reviews: React.FC = () => {
    const params = useParams();
    const [ratingResponses, setRatingResponses] = useState<RatingResponse[]>([]);
    const getResponses = async () => {
        const getResponsesFunc = await RatingApi.ratingControllerFindAll(Number(params.id));
        const res = await getResponsesFunc();
        setRatingResponses(res.data);
        console.log("responses", res.data);
    }
    useEffect(() => {
        getResponses();
    }, [])

    const totalVotes = ratingResponses.length;
    const averageRating = totalVotes > 0 ? (ratingResponses.reduce((sum, rating) => sum + rating.ratingPoint, 0) / totalVotes) : 0;

    const ratingsBreakdown: Rating[] = Array.from({ length: 5 }, (_, i) => ({ stars: i + 1, count: 0 }));
    ratingResponses.forEach(response => {
        const rating = ratingsBreakdown.find(r => r.stars === response.ratingPoint);
        if (rating) {
            rating.count++;
        }
    });

    const [selectedRating, setSelectedRating] = useState<number>(5);
    const [newReview, setNewReview] = useState<string>('');

    const handleRatingClick = (stars: number) => {
        setSelectedRating(stars);
    };

    const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview(event.target.value);
    };

    const handlePublish = () => {
        if (selectedRating && newReview.trim()) {
            const newRatingResponse: CreateRatingDto = {
                productId: Number(params.id), // Replace with actual product ID logic
                ratingPoint: selectedRating,
                comment: newReview.trim(),
            };
            setNewReview('');
            setSelectedRating(5);
            console.log('New rating published:', newRatingResponse);
            const postRatingApiCall = async () => {
                try {
                    const postResponsesFunc = await RatingApi.ratingControllerUpsert(newRatingResponse);
                    const res = await postResponsesFunc();
                    console.log("post res:", res)
                    if (res.status >= 200 && res.status <= 299) {
                        getResponses();
                    }
                } catch (error) {
                    console.log("Error while posting response", error);
                }
            }
            postRatingApiCall();
        } else {
            console.log('Please select a rating and write a review.');
        }
    };

    return (
        <section className="flex justify-center p-5 min-h-[100%]">
            <div className="flex flex-col w-[105%] max-w-[105%] min-w-[105%] bg-gray-100 rounded-lg shadow-md md:flex-row">
                <div className="flex-1 md:flex-[2] p-5 border-b md:border-b-0 md:border-r border-gray-300">
                    <h3 className="text-black text-lg font-semibold">User Rating: {averageRating.toFixed(1)} out of 5 ⭐</h3>
                    <h4 className='mt-2 text-black font-semibold'>From {totalVotes} people </h4>
                    <div className="mt-2">
                        {ratingsBreakdown.map((rating, index) => {
                            const percentage = totalVotes > 0 ? ((rating.count / totalVotes) * 100).toFixed(0) : 0;
                            return (
                                <div key={index} className="mb-4">
                                    <div className="flex items-center justify-between">
                                        <span className="flex">
                                            {Array.from({ length: 5 }, (_, i) => (
                                                <StarIcon key={i} filled={i < rating.stars} />
                                            ))}
                                        </span>
                                        <span className="text-sm text-gray-600">{percentage}%</span>
                                    </div>
                                    <div className="relative mt-1 h-4 bg-gray-300 rounded">
                                        <div
                                            className="bg-green h-full rounded"
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                <div className="flex-1 md:flex-[5] p-5 flex flex-col">
                    <h3 className="text-black text-lg font-semibold">Write Your Review</h3>
                    <div className="flex items-center mb-3">
                        {Array.from({ length: 5 }, (_, i) => (
                            <button key={i} onClick={() => handleRatingClick(i + 1)} className="focus:outline-none">
                                <StarIcon filled={i < (selectedRating || 0)} />
                            </button>
                        ))}
                    </div>
                    <textarea
                        value={newReview}
                        onChange={handleReviewChange}
                        placeholder="Write your review here..."
                        className="w-full h-20 p-2 mb-3 border border-gray-300 rounded resize-none text-black"
                    ></textarea>
                    <button onClick={handlePublish} className="my-1 bg-darkgreen hover:bg-green mx-auto w-full text-white p-2 rounded-full border-solid">
                        Publish
                    </button>
                    <div className="mt-4 flex-1">
                        <div className="max-h-[1000px] overflow-y-auto border border-gray-300 rounded p-2 bg-white">
                            {ratingResponses.map((userReview, index) => (
                                <div key={index} className="py-3 px-4 border border-gray-200 bg-gray-50 rounded-md shadow-sm mb-2 last:mb-0">
                                    <p className="text-black">
                                        <strong>User {userReview.userId}</strong> {/* Display userId or fetch username */}
                                        <span className="text-gray-600 text-sm ml-2">{new Date(userReview.created_at).toLocaleDateString()}</span>
                                    </p>
                                    <div className="flex mb-1">
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <StarIcon key={i} filled={i < userReview.ratingPoint} />
                                        ))}
                                    </div>
                                    <p className='text-black'>
                                        {userReview.comment}
                                    </p>
                                    <button className="my-1 bg-darkgreen hover:bg-green mx-auto w-[15%] text-white p-2 rounded-full border-solid">
                                        Helpful
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;