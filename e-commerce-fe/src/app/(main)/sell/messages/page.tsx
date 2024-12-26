// components/MessagingPanel.tsx
'use client';

import { ChatApi } from '@/app/utils/ApiClient';
import React, { useState, useEffect, useRef } from 'react';

interface User {
    id: string;
    name: string;
    avatarUrl?: string;
}

interface Message {
    id: string;
    senderId: string;
    content: string;
    timestamp: Date;
}

interface Conversation {
    id: string;
    participants: User[];
    messages: Message[];
    lastMessage?: Message;
    unreadCount?: number;
}

const mockUser: User = {
    id: 'user-1',
    name: 'You',
    avatarUrl: '/avatar-you.png', // Replace with your actual asset path
};

const mockOtherUser: User = {
    id: 'user-2',
    name: 'Support Agent',
    avatarUrl: '/avatar-agent.png', // Replace with your actual asset path
};

const mockConversations: Conversation[] = [
    {
        id: 'conv-1',
        participants: [mockUser, mockOtherUser],
        messages: [
            { id: 'msg-1', senderId: mockOtherUser.id, content: 'Hello, how can I help you?', timestamp: new Date() },
            { id: 'msg-2', senderId: mockUser.id, content: 'Hi, I have a question about my order.', timestamp: new Date() },
        ],
        lastMessage: { id: 'msg-2', senderId: mockUser.id, content: 'Hi, I have a question about my order.', timestamp: new Date() },
        unreadCount: 0,
    },
    // Add more mock conversations as needed
];

const MessagingPanel: React.FC = () => {
    const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
    const [selectedConversationId, setSelectedConversationId] = useState<string | null>(mockConversations[0]?.id || null);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const selectedConversation = conversations.find((conv) => conv.id === selectedConversationId);

    useEffect(() => {
        // Scroll to bottom when messages change
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [selectedConversation?.messages]);

    const handleSendMessage = async () => {
        if (selectedConversationId && newMessage.trim()) {
            const newMessageObject: Message = {
                id: `msg-${Date.now()}`,
                senderId: mockUser.id,
                content: newMessage.trim(),
                timestamp: new Date(),
            };

            setConversations((prevConversations) =>
                prevConversations.map((conv) =>
                    conv.id === selectedConversationId
                        ? { ...conv, messages: [...conv.messages, newMessageObject], lastMessage: newMessageObject }
                        : conv
                )
            );
            setNewMessage('');

            // Simulate receiving a reply after a short delay (for demo purposes)
            setTimeout(() => {
                const replyMessage: Message = {
                    id: `msg-reply-${Date.now()}`,
                    senderId: mockOtherUser.id,
                    content: `Thanks for your message! We'll get back to you soon regarding "${newMessage.trim()}".`,
                    timestamp: new Date(),
                };
                setConversations((prevConversations) =>
                    prevConversations.map((conv) =>
                        conv.id === selectedConversationId
                            ? { ...conv, messages: [...conv.messages, replyMessage], lastMessage: replyMessage }
                            : conv
                    )
                );
            }, 1000);
            try {
                const callGetChatFunc = await ChatApi.chatControllerGet(Number(mockOtherUser.id));
                const res = await callGetChatFunc();
                console.log(res);
            } catch (error) {
                console.log("error", error)
            }
        }
    };

    const handleSelectConversation = (conversationId: string) => {
        setSelectedConversationId(conversationId);
        // Mark messages as read (optional)
        setConversations((prevConversations) =>
            prevConversations.map((conv) =>
                conv.id === conversationId ? { ...conv, unreadCount: 0 } : conv
            )
        );
    };

    return (
        <div className="flex h-full w-full">
            {/* Conversation List */}
            <div className="w-2/5 border-r border-gray-200 overflow-y-auto">
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Messages</h2>
                </div>
                <ul>
                    {conversations.map((conversation) => (
                        <li
                            key={conversation.id}
                            className={`p-3 hover:bg-gray-100 cursor-pointer ${selectedConversationId === conversation.id ? 'bg-gray-100' : ''
                                }`}
                            onClick={() => handleSelectConversation(conversation.id)}
                        >
                            <div className="flex items-center space-x-2">
                                {conversation.participants
                                    .find((user) => user.id !== mockUser.id)
                                    ?.avatarUrl && (
                                        <img
                                            src={
                                                conversation.participants.find((user) => user.id !== mockUser.id)
                                                    ?.avatarUrl
                                            }
                                            alt="Avatar"
                                            className="w-8 h-8 rounded-full"
                                        />
                                    )}
                                <div>
                                    <div className="font-medium">
                                        {conversation.participants.find((user) => user.id !== mockUser.id)?.name}
                                    </div>
                                    <div className="text-sm text-gray-500 truncate">
                                        {conversation.lastMessage?.content}
                                    </div>
                                    {conversation.unreadCount != null && conversation.unreadCount > 0 && (
                                        <span className="ml-1 bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">
                                            {conversation.unreadCount}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Message Area */}
            <div className="flex-1 flex flex-col h-full">
                {selectedConversation ? (
                    <>
                        <div className="p-4 border-b border-gray-200">
                            <div className="font-semibold">
                                {selectedConversation.participants.find((user) => user.id !== mockUser.id)?.name}
                            </div>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-3">
                            {selectedConversation.messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.senderId === mockUser.id ? 'justify-end' : 'justify-start'
                                        }`}
                                >
                                    <div
                                        className={`max-w-xs rounded-lg p-2 ${message.senderId === mockUser.id
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'bg-gray-100 text-gray-800'
                                            }`}
                                    >
                                        {message.content}
                                        <div className="text-xs text-gray-500 mt-1">
                                            {new Date(message.timestamp).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} /> {/* Scroll to this element */}
                        </div>
                        <div className="p-4 border-t border-gray-200">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="Type your message..."
                                    className="flex-1 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }
                                    }}
                                />
                                <button
                                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring focus:blue-300"
                                    onClick={handleSendMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-gray-500">Select a conversation to view messages.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessagingPanel;