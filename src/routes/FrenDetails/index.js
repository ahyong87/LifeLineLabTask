import {connect} from 'react-redux';
import {toggleLoading} from 'actions/globalLoading';
import {unfriendAction} from 'actions/contact';
import FrenDetails from './FrenDetails';

const mapStateToProps = ({globalLoading}) => ({
  isLoading: globalLoading.isLoading,
});

const mapActionCreators = {
  toggleLoading,
  unfriendAction,
};

export default connect(mapStateToProps, mapActionCreators)(FrenDetails);
