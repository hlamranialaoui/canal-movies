/* ********       IMPORTS       ******** */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CanalMoviesComponent from './CanalMoviesComponent';
import actions from './actions';

/* ********      VARIABLES      ******** */

const mapStateToProps = (state: any) => ({
    trendingMovies: state.app.appReducer.trendingMovies,
    filteredMovies: state.app.appReducer.filteredMovies,
});

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            loadMovieList: actions.loadMovieList,
            filterMovieList: actions.filterMovieList,
        },
        dispatch,
    );

const CanalMovies = connect(mapStateToProps, mapDispatchToProps)(CanalMoviesComponent);

/* ********       EXPORTS       ******** */
export default CanalMovies;
