// import { Link } from "react-router-dom";

const SinglePost = () => {

  return (
    <div className="p-6 w-1/4">
      <div className="flex-3 bg-[#fdfbfb] shadow-lg rounded-xl p-5">
        <div className="sidebarItem">
          <h2 className="sidebarTitle text-gray-800">About Me</h2>
          <img
            className="rounded-full w-64 h-64 object-cover transition duration-300 transform hover:scale-110"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="Author"
          />
          <p className="mt-4 text-center text-gray-600">Web Developer and Designer</p>
        </div>
        <div className="sidebarItem mt-5">
          <h2 className="sidebarTitle text-gray-800">Categories</h2>
          <ul className="sidebarList mt-3">
            <li className="sidebarListItem cursor-pointer hover:text-teal-500 transition duration-300">Technology</li>
            <li className="sidebarListItem cursor-pointer hover:text-teal-500 transition duration-300">Lifestyle</li>
            <li className="sidebarListItem cursor-pointer hover:text-teal-500 transition duration-300">Travel</li>
            <li className="sidebarListItem cursor-pointer hover:text-teal-500 transition duration-300">Health</li>
          </ul>
        </div>
        <div className="sidebarSocial mt-5 flex justify-center">
          <i className="sidebarIcon fab fa-facebook-f text-xl text-blue-600 cursor-pointer transition duration-300 hover:text-blue-700"></i>
          <i className="sidebarIcon fab fa-twitter text-xl text-blue-400 cursor-pointer transition duration-300 hover:text-blue-500 ml-4"></i>
          <i className="sidebarIcon fab fa-instagram text-xl text-pink-600 cursor-pointer transition duration-300 hover:text-pink-700 ml-4"></i>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
