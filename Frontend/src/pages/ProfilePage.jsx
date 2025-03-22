import { useEffect, useState } from "react";
import checkTokenValidity from "../middleware/checkLogin";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = checkTokenValidity();
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      const storedUserData = JSON.parse(localStorage.getItem("userData"));
      fetchUserData(storedUserData.userId);
    }
  }, [navigate]);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/users/get/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6faff]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="mb-4">
          <p className="text-gray-600">Name:</p>
          <p className="text-lg font-semibold">{userData.name}</p>
        </div>
        <div>
          <p className="text-gray-600">Email:</p>
          <p className="text-lg font-semibold">{userData.email}</p>
        </div>
        <div>
          <p className="text-gray-600">Books:</p>
          <p className="text-lg font-semibold">{userData.books.length} books</p>
        </div>
        <div>
          <p className="text-gray-600">Wishlist:</p>
          <p className="text-lg font-semibold">{userData.wishlist.length} items</p>
        </div>
        <div>
          <p className="text-gray-600">Account Created:</p>
          <p className="text-lg font-semibold">{new Date(userData.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;