import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeName, changeStatus, initializeForm } from '../actions';
import Form from './Form';

class App extends Component {
    render() {
        return (
            <div>
              <Form 
                changeName={this.props.changeName} 
                changeStatus={this.props.changeStatus} 
                initializeForm={this.props.initializeForm}
                name={this.props.name}
                status={this.props.status}
                />
            </div>
        )
    }
} 

const mapDispatchToProps = ({ changeName, changeStatus, initializeForm });

const mapStateToProps = state => ({ name: state.form.name, status: state.form.status });

export default connect(mapStateToProps,mapDispatchToProps)(App)
