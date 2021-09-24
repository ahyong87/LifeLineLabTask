import {connect} from 'react-redux';
import Card from './Card';

const mapStateToProps = () => ({});

const mapActionCreators = {
};

export default connect(mapStateToProps, mapActionCreators, null, {
  forwardRef: true,
})(Card);
