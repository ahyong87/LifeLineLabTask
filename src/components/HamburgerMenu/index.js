import {connect} from 'react-redux';
import {setUserPreferenceLanguage} from 'actions/auth';
import {setData} from 'actions/contact';
import HamburgerMenu from './HamburgerMenu';

const mapStateToProps = ({auth}) => ({
  userPreferenceLanguage: auth.userPreferenceLanguage,
});

const mapActionCreators = {
  setUserPreferenceLanguage,
  setData,
};

export default connect(mapStateToProps, mapActionCreators, null, {
  forwardRef: true,
})(HamburgerMenu);
