import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string'
import { locationSearch } from '../../actions';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Loading from '../../components/Loading/Loading';


import './Results.scss';


class Results extends Component {
    componentDidMount() {
        const { location } = queryString.parse(this.props.location.search)
        if (location) {
            this.props.locationSearch(location)
        } else {
            this.props.history.push('/');
        }
        
    }
    
    render() {
        return (
            <>
                <Header />
                {
                    this.props.pending ? <Loading /> : <List />
                }
           </>
        )
    }
}

const mapStateToProps = state => ({
    businesses: state.businesses,
    pending: state.searchingLocation
});

export default connect(mapStateToProps, { locationSearch })(withRouter(Results));