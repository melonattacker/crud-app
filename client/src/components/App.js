import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName, changeStatus } from '../actions';
import Form from './Form';

class App extends Component {
    render() {
        return (
            <div>
              <Form changeName={this.props.changeName} changeStatus={this.props.changeStatus} />
            </div>
        )
    }
} 

const mapDispatchToProps = ({ changeName, changeStatus });

const mapStateToProps = state => ({ name: state.name, status: state.status });

export default connect(mapStateToProps,mapDispatchToProps)(App)