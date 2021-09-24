import {connect} from 'react-redux';
import {toggleLoading} from 'actions/globalLoading';
import {getContactList, setData, unfriendAction} from 'actions/contact';
import MainScreen from './MainScreen';

const mapStateToProps = ({globalLoading, contact}) => ({
  isLoading: globalLoading.isLoading,
  contactData: contact.contactData.items,
  contactTotal: contact.contactData.total,
  current_page: contact.contactData.current_page,
});

const mapActionCreators = {
  toggleLoading,
  getContactList,
  setData,
  unfriendAction,
};

export default connect(mapStateToProps, mapActionCreators)(MainScreen);
