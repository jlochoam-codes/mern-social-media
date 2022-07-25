import React from 'react'
import { useState } from 'react'
import './ProfileModal.css'
import { Modal, useMantineTheme } from '@mantine/core'
import { ProfileData } from '../../Data/ProfileData'

const ProfileModal = ({ opened, setOpened }) => {
  const theme = useMantineTheme();

  const [name, setName] = useState(ProfileData.name);
  const [ocupation, setOcupation] = useState(ProfileData.ocupation);
  const [maritalStatus, setMaritalStatus] = useState(ProfileData.maritalStatus);
  const [city, setCity] = useState(ProfileData.city);
  const [company, setCompany] = useState(ProfileData.company);
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
        <div className="ProfileModalForm">
          <div className="ProfileModalFormName">
            <span>Name: </span>
            <span className="formField">
              <input type="text" name='updateName' value={name}
                onChange={e => setName(e.target.value)} />
            </span>
          </div>
          <div className="ProfileModalFormOcupation">
            <span>Ocupation: </span>
            <span className="formField">
              <input type="text" name='updateOcupation' value={ocupation}
                onChange={e => setOcupation(e.target.value)} />
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
          <div className="ProfileModalFormCompany">
            <span>Works at: </span>
            <span className="formField">
              <input type="text" name='updateCompany' value={company}
                onChange={e => setCompany(e.target.value)} />
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
            <input type="button" value="Confirm" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ProfileModal;
