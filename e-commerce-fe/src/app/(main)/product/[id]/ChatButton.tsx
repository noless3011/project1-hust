'use client'; // Make sure this is a client component

import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi'; // Example icon, install react-icons
import { motion, AnimatePresence } from 'framer-motion'; // For smooth animation, install framer-motion
import { ChatApi } from '@/app/utils/ApiClient';
import { CreateChatDto } from '@/api';

interface ChatButtonProps {
    ownerId: number;
}

const ChatButton: React.FC<ChatButtonProps> = ({ ownerId }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: 'Welcome! How can I help you?', sender: 'bot' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage('');

            // Simulate bot response after a short delay
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: `Thanks for your message! I'll get back to you soon.`, sender: 'bot' },
                ]);
            }, 500); // Simulate a 0.5-second delay

            const chatData: CreateChatDto = {
                receiverId: ownerId,
                content: newMessage
            }
            const chat = async () => {
                try {
                    const callCreateChatFunc = await ChatApi.chatControllerCreate(chatData);
                    const res = await callCreateChatFunc();
                    console.log(res);
                } catch (error) {
                    console.log(error);
                }

            }
            chat();
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <button
                onClick={toggleChat}
                className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Chat with the seller"
                aria-expanded={isChatOpen}
                aria-controls="chat-popup"
            >
                <FiMessageSquare size={20} />
            </button>

            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        id="chat-popup"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-20 right-0 bg-white rounded-md shadow-lg p-4 w-80"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">Chat with Seller</h3>
                            <button
                                onClick={toggleChat}
                                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                aria-label="Close chat"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="border rounded p-2 mb-2 h-40 overflow-y-auto flex flex-col">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-1 p-2 rounded-md ${message.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
                                        }`}
                                >
                                    <p className="text-sm">{message.text}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="flex-grow border rounded p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSendMessage();
                                    }
                                }}
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Send
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChatButton;

