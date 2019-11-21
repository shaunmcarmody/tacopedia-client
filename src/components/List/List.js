import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Business from '../Business/Business';
import Map from '../Map/Map';

const List = props => {
  return (
    <main className="businesses-main">
        <section className="businesses-map">
            <Map />
        </section>
        <section className="businesses-results">
            {
                props.businesses.map(business => <Business key={business.id} business={business} />)
            }
        </section>
    </main>
  )
}

const mapStateToProps = state => ({
  businesses: state.businesses
});

export default connect(mapStateToProps, null)(withRouter(List));