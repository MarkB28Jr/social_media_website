import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';

const ProfileUpdate = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    profile: {
      profileName: '',
      age: '',
      gender: '',
      image: '',
    },
  });

  useEffect(() => {
    const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null;
    if (userId) {
      axios.get(`/users/${userId}`)
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const userId = window.localStorage.getItem('userId') ? JSON.parse(window.localStorage.getItem('userId')) : null;
    if (userId) {
      try {
        const response = await axios.put(`/users/${userId}/profile`, {
          profileName,
          age,
          gender,
          image,
        })
        console.log(response.data)
        setProfileName(response.data.profile.profileName)
        setAge(response.data.profile.age)
        setGender(response.data.profile.gender)
        setImage(response.data.profile.image)
        toast.success('Profile Updated Successfully!');
        navigate('/social');
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          toast.error(error.response.data.error);
        } else {
          toast.error('An error occurred while updating profile');
        }
      }
    }
  }

  return (
    <div className="gap grid justify-center items-center text-center center mt-20">
      <form onSubmit={onSubmit} className="bg-gray-300 rounded-lg">
        <h1 className="text-center bold text-2xl">Edit Your Profile</h1>
        <div>
          <input
            type="text"
            value={image}
            placeholder="Update Image URL"
            onChange={(e) => setImage(e.target.value)}

            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="text"
            value={profileName}
            onChange={(e) => setUser({ ...user, profileName: e.target.value })}

            placeholder="Update Name"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setImage(e.target.value)}

            placeholder="Update Age"
            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <input
            type="text"
            value={gender}
            placeholder="Update Gender"
            onChange={(e) => setImage(e.target.value)}

            className="m-3 rounded-md text-center"
          />
        </div>
        <div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate