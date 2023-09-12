import React from 'react';

const Contact = () => (
  <div className="text-center">
    <p className="mx-6 my-4 text-xl">
      The Blog app is a classic example of a blog website. It is a fully functional website that
      allows users to create accounts, shows the list of posts, latest post and empower readers
      to interact with them by adding comments and liking posts.
    </p>
    <div className="p-2 mb-8">
      <p className="text-2xl font-bold">
        Need help to create one?
      </p>
      <p className="text-2xl font-bold">
        Checkout my profiles below and ping me.
      </p>
    </div>
    <h3 className="rounded text-sm text-red-500 border inline p-3 m-1 font-medium hover:text-white hover:border-red-700 hover:bg-red-700"><a href="https://tufahel.github.io/portfolio-desktop-version/">Portfolio</a></h3>
    <h3 className="rounded text-sm font-medium border inline p-3 m-1 hover:border-black hover:bg-black hover:text-white"><a href="https://github.com/Tufahel">GitHub</a></h3>
    <h3 className="rounded text-sm font-medium border inline p-3 m-1 text-blue-600 hover:text-white hover:bg-blue-600 hover:border-blue-600"><a href="https://www.linkedin.com/">Linkdein</a></h3>
    <h3 className="rounded text-sm font-medium border inline p-3 m-1 text-gray-600 hover:text-white hover:bg-gray-600 hover:border-gray-600"><a href="https://angel.co/u/tufahel-ahmed">AngelList</a></h3>
    <h3 className="rounded text-sm font-medium border inline p-3 m-1 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-500"><a href="https://twitter.com/TufahelAhmed">Twitter</a></h3>
  </div>
);

export default Contact;
