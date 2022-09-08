import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, useMantineTheme } from '@mantine/core'
import './ProfileModal.css'
import { updateUser } from '../../actions/UserActions'

const ProfileModal = ({ opened, setOpened }) => {
  const theme = useMantineTheme();

  const { user } = useSelector(state => state.userReducer.userData);
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.userReducer);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [maritalStatus, setMaritalStatus] = useState(user.maritalStatus);
  const [city, setCity] = useState(user.city);
  const [job, setJob] = useState(user.job);
  const [profileImage, setProfileImage] = useState('');
  const [coverImage, setCoverImage] = useState('');

  const onProfileImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setProfileImage({
        image: URL.createObjectURL(img)
      });
    }
  }

  const onCoverImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setCoverImage({
        image: URL.createObjectURL(img)
      });
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    if (!firstName || !lastName) {
      console.log('First and Last name are required fields');
      return;
    }
    const updatedUser = {
      firstName,
      lastName,
      maritalStatus,
      city,
      job,
      requesterUserId: user._id
    };
    try {
      dispatch(updateUser(user._id, updatedUser));
      if (error) {
        alert('The user could not be updated, please try again later');
        return;
      }
      setOpened(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="ProfileModal">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Update your info'
        size='30vw'
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        overflow="inside"
        radius={10}
      >
        <form className="ProfileModalForm" onSubmit={handleSubmit}>
          <div className="ProfileModalFormFirstName">
            <span>First name: </span>
            <span className="formField">
              <input type="text" name='updateFirstName' value={firstName}
                onChange={e => setFirstName(e.target.value)} required />
            </span>
          </div>
          <div className="ProfileModalFormLastName">
            <span>Last name: </span>
            <span className="formField">
              <input type="text" name='updateLastName' value={lastName}
                onChange={e => setLastName(e.target.value)} required />
            </span>
          </div>
          <div className="ProfileModalFormMarital">
            <span>Marital status: </span>
            <span className="formField">
              <input type="text" name='updateStatus' value={maritalStatus}
                onChange={e => setMaritalStatus(e.target.value)} />
            </span>
          </div>
          <div className="ProfileModalFormCity">
            <span>Lives in: </span>
            <span className="formField">
              <input type="text" name='updateCity' value={city}
                onChange={e => setCity(e.target.value)} />
            </span>
          </div>
          <div className="ProfileModalFormJob">
            <span>Job: </span>
            <span className="formField">
              <input type="text" name='updateJob' value={job}
                onChange={e => setJob(e.target.value)} />
            </span>
          </div>
          <div className="ProfileModalFormProfImg">
            <span>Profile image: </span>
            <input type="file" name="profileImg"
              accept='image/*' onChange={onProfileImageChange} />
            <img src={profileImage} alt="Update profile" style={{ display: "none" }} />
          </div>
          <div className="ProfileModalFormCovImg">
            <span>Cover image: </span>
            <input type="file" name="coverImg"
              accept='image/*' onChange={onCoverImageChange} />
            <img src={coverImage} alt="Update cover" style={{ display: "none" }} />
          </div>
          <div className="ProfileModalFormSubmit">
            <button type="submit" disabled={loading ? "true" : ""}>
              {loading ? "Loading..." : "Confirm"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default ProfileModal;
