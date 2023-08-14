import React from 'react';

const ComingSoon = ({ setOpenComingSoon, comingSoonRef }) => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-[60] md:z-50">
                <div className="bg-gray-100 opacity-70 fixed inset-0 z-40"></div>
                <div className="bg-white max-w-md mx-auto rounded-lg shadow-lg overflow-hidden z-50" ref={comingSoonRef}>
                    <div className="sm:flex sm:items-center px-6 py-4">
                        <div className="text-center sm:text-left">
                            <h2 className="text-lg leading-loose">Coming Soon!</h2>
                            <p className="text-gray-600">Stay tuned for exciting updates!</p>
                        </div>
                    </div>
                    <div className="px-6 py-4 border-t border-gray-200">
                        <div className="flex justify-end">
                            <button className="rounded px-4 py-2 bg-green-500 text-white hover:bg-green-600 focus:outline-none" onClick={() => setOpenComingSoon(false)}>
                                Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComingSoon;
