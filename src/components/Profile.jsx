import { useState } from "react"


const Profile = () => {

  const [socials, setSocial] = useState('')
  const [profileName, setProfileName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const fetchSocials = async () => {
    let response = await axios.get(' http://localhost:4000/social ')
    setSocial(response.data)
  }

  // Handle Changes
  const handleChange = useCallback((e) => {
    setProfileName(e.target.value);
  }, []);
  const handleAgeChange = useCallback((e) => {
    setAge(e.target.value);
  }, []);
  const handleGenderChange = useCallback((e) => {
    setGender(e.target.value);
  }, []);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(' http://localhost:4000/social ', { profileName: profileName, age: age, gender: gender })
      setSocial([...socials, response.data])
      setProfileName("")
      setAge("");
      setGender("");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSocials();
  }, []);
  // const onSubmit = async () => {
  //   e.preventDefault()
  //   const response = await fetch('http://localhost:4000/api/register', {
  //     method: 'POST',
  //     body: JSON.stringify({profileName, age, gender}),
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   if (response.status !== 200) {
  //     alert('Something went wrong')
  //   } else {
  //     alert('Succes')
  //     window.location.href = '/profile'
  //   }
  // }

/*************** Return ***************/
  return (
    <div className="profile">
    <form onSubmit={handleSubmit}>
      <h1>Profile</h1>
      {/* <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      </div> */}
      <div>
        <label>Name</label>
        <input
          type="text"
          value={profileName}
          onChange={handleChange}
          placeholder="Enter Profile Name"
          required
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          value={age}
          onChange={handleAgeChange}
          placeholder="Enter Age"
          required
        />
      </div>
      <div>
        <label>Gender</label>
        <select value={handleGenderChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" ></button>
    </form>
    <div>
        {socials.map((social) => (
          <div key={social._id}>
            <p>{social.profileName}</p>
            <p>{social.age}</p>
            <p>{social.gender}</p>
          </div>
        ))}
      </div>
  </div>
  )
}

export default Profile
