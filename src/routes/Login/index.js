import {connect} from 'react-redux';
import {toggleLoading} from 'actions/globalLoading';
import {getLoginData} from 'actions/auth';
import Login from './Login';

const mapStateToProps = ({globalLoading, auth}) => ({
  isLoading: globalLoading.isLoading,
  loginData: auth.loginData,
});

const mapActionCreators = {
  toggleLoading,
  getLoginData,
};

export default connect(mapStateToProps, mapActionCreators)(Login);
