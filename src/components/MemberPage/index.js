// import PropTypes from 'prop-types';

// imports from react, react-router-dom and react-redux
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// action creators
import { actionLoadMemberPictures } from '../../actions/user';
// Style
import './style.scss';
// Sub-components
import Carousel from './Carousel';
import ProfileEditable from './ProfileEditable';
import ProfileNonEditable from './ProfileNonEditable';
import Settings from './Settings';
import PreviousPage from '../PreviousPage';
import AddPicture from '../AddPicture';
import { useReducer } from 'react';

function MemberPage() {
  const dispatch = useDispatch();
  // Retrieves the member's id
  const { memberId } = useParams();
  // console.log('memberId = ', memberId);
  // check in the state if the user is logged
  const isLogged = useSelector((state) => state.user.logged);
  // check connected user's id (blank if not)
  const userId = useSelector((state) => state.user.userId);
  // upload pictures from the state (brought by useState)
  const pictures = useSelector((state) => state.user.memberListOfPictures);
  // console.log('Member Page : pictures = ', pictures);
  // for the visibility of the AddPicture modal
  const [isAddPictureVisible, setIsAddPictureVisible] = useState(false);
  const showMenuAddPicture = () => {
    setIsAddPictureVisible(true);
  };

  useEffect(
    () => {
      // Update of the picture of the week
      window.scrollTo(0, 0);
      dispatch(actionLoadMemberPictures(memberId));
    },
    [], // first render
  );

  // const email = 'aaa@gmail.com';
  // console.log('isLogged = ', isLogged);
  // console.log('userId   =', userId, 'mmm');
  // console.log('memberId =', memberId, 'mmm');
  // console.log('(isLogged && (userId == memberId)) : ', (isLogged && (userId == memberId)));
  return (
    <div className="memberPage__container" id="topMemberPage">
      <PreviousPage />
      {(pictures.length !== 0)
        && (
          <>
            <div className="memberPage__header">
              {(isLogged && (userId == memberId))
                ? (
                  <div className="memberPage__title">
                    <h2>Mes Productions</h2>
                    <button onClick={showMenuAddPicture} type="button" id="memberPage__buttonTitle">Ajouter une image</button>
                    {isAddPictureVisible && <AddPicture setIsAddPictureVisible={setIsAddPictureVisible} className="alertModal" />}
                  </div>
                )
                : (
                  <div className="memberPage__title">
                    <h2>Les productions de</h2>
                    <h2><span className="memberPage__title--pseudo">{pictures.pseudo}</span></h2>
                  </div>
                )}
            </div>

            <Carousel />

            {
              (isLogged && (userId == memberId))
                ? <ProfileEditable pseudo={pictures.pseudo} />
                : <ProfileNonEditable pseudo={pictures.pseudo} avatar={pictures.avatar} bio={pictures.bio} />
            }

            {
              (isLogged && (userId == memberId))
              && <Settings />
            }
          </>
        )}
    </div>
  );
}

// MemberPage.propTypes = {

// };

export default MemberPage;
