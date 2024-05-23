import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getNotifications } from "../../Services/Notification/notification";

const NotificationCards = () => {
  const navigate = useNavigate();
  const [visiblenotifications, setVisiblenotifications] = useState(8); // Start with 8 notifications
  const [Notificationdata, setNotificationdata] = useState([]);

  useEffect(() => {
    getNotifications()
      .then((response) => {
        if (response.success === false) {
          throw new Error(response.message);
        }
        const { notification } = response;
        setNotificationdata(notification)
      })
      .catch((error) => {
        console.log("Error getting galleries:", error);
      });
  }, []);

  // Function to format the createdAt date
  const formatCreatedAtDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { month: "short", day: "2-digit", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleClick = (id, notification) => {
    navigate(`/notification/${id}`, { state: { notification } });
  };

  const handleShowMore = () => {
    setVisiblenotifications((prevVisiblenotifications) =>
      Math.min(prevVisiblenotifications + 8, Notificationdata?.length)
    );
  };

  const handleShowLess = () => {
    setVisiblenotifications((prevVisiblenotifications) => Math.max(prevVisiblenotifications - 8, 8));
  };

  return (
    <div className="container mx-auto p-8 bg-yellow-600">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 bg-white shadow-3xl p-2 rounded-lg ">
        Wellcome to CS & IT Notification Section
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {Notificationdata && Notificationdata.slice(0, visiblenotifications).map((notification, index) => (
          <div
            key={index}
            className="gallery-item relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            onClick={() => handleClick(index, notification)}
          >
            <img
              src={notification.ImageURL}
              alt={notification["notification Title"]}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="gallery-item-overlay absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-end p-4">
              <div className="text-center text-white w-full">
                <h2 className="text-xl font-semibold mb-2">{notification.title}</h2>
                <p className="text-sm mb-4">{notification.Message}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300">
                  
                  {formatCreatedAtDate(notification.Date)}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 space-x-4">
        {visiblenotifications < Notificationdata?.length && (
          <button
            onClick={handleShowMore}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
          >
            Show More
          </button>
        )}
        {visiblenotifications > 8 && (
          <button
            onClick={handleShowLess}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default NotificationCards;
