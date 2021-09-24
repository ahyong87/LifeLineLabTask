import {connect} from 'react-redux';
import {toggleLoading} from 'actions/globalLoading';
import EntryPoint from './EntryPoint';

const mapStateToProps = ({globalLoading}) => ({
  isLoading: globalLoading.isLoading,
});

const mapActionCreators = {
  toggleLoading,
};

export default connect(mapStateToProps, mapActionCreators)(EntryPoint);
