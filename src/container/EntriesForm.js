import React from 'react';

class EntriesForm extends React.Component {
    // set form fields inital state with empty string
    state = {
        title: '',
        email: '',
        text: '',
        checkEmail: false,
        checkTitle: false,
        checkText: false,
        entries: [],
    };
    // binding change state handler from input
    handleChange = this.handleChange.bind(this);
    submitEntriesHandler = this.submitEntriesHandler.bind(this);
    componentDidMount() {
        const entriesFromStorage = JSON.parse(localStorage.getItem('entriesFromStorage')) || [];
        this.setState({ entries: entriesFromStorage });
    }
    // handle entries from submit button
    submitEntriesHandler() {
        if (this.state.checkEmail && this.state.checkTitle && this.state.checkText) {
            const mewEntry = {
                email: this.state.email,
                title: this.state.title,
                text: this.state.text,
                created: new Date().toLocaleString(),
                id: new Date().valueOf(),
            };
            const allEntries = this.state.entries;
            const newEntries = [mewEntry].concat(allEntries);
            this.setState({ entries: newEntries }, () => {
                localStorage.setItem('entriesFromStorage', JSON.stringify(this.state.entries));
            });
        }
    }

    handleChange(evt) {
        // we get the evt.target with the name we assigned (which will be either title, email, text)
        // and use it to target the key on our `state` object with the same name
        this.setState({
            [evt.target.name]: evt.target.value,
        });
        if (evt.target.name === 'email') {
            this.validateEmail(evt.target.value);
        }
        if (evt.target.name === 'title') {
            this.validateTtile(evt.target.value);
        }
        if (evt.target.name === 'text') {
            this.validateText(evt.target.value);
        }
    }

    validateEmail = (email) => {
        const regexp = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexp.test(email)) {
            this.setState({ checkEmail: true });
        } else {
            this.setState({ checkEmail: false });
        }
    };

    validateTtile = (title) => {
        const checkLength = title.length;
        if (checkLength >= 5) {
            this.setState({ checkTitle: true });
        } else {
            this.setState({ checkTitle: false });
        }
    };

    validateText = (text) => {
        const checkLength = text.length;
        if (checkLength >= 10) {
            this.setState({ checkText: true });
        } else {
            this.setState({ checkText: false });
        }
    };

    render() {
        const listView = this.state.entries.map(list => (
            <div key={list.id}>
                <ul className='entries-list'>
                    <li>
                        <div className='info'>
                            <h2 className='title'>{list.title}</h2>
                            <p className='desc'>{list.email}</p>
                            <p className='desc'>{list.text}</p>
                            <ul>
                                <li className='datecreatedon'> <small>{list.created}</small></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        ));
        return (
            <div className='container'>
            <div className='row'>
                <div className='[col-xs-6 col-sm-offset-1 col-sm-4 col-md-6]'>
                    <div className={this.state.checkTitle ? 'noError' : 'error'}>Title needs at least 5 characters</div>
                    <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Title' name='title' onChange={this.handleChange} required />
                    </div>
                    <div className={this.state.checkEmail ? 'noError' : 'error'}>Email is not valid</div>
                    <div className='form-group'>
                        <input type='email' className='form-control' placeholder='Email' name='email' onChange={this.handleChange} required />
                    </div>
                    <div className={this.state.checkText ? 'noError' : 'error'}>Text needs at least 10 characters</div>
                    <div className='form-group'>
                        <input type='input-group-text' className='form-control' placeholder='Text' name='text' onChange={this.handleChange} required />
                    </div>
                    <div className='text-center'>
                        <input type='submit' onClick={this.submitEntriesHandler} value='Submit Entry' className='btn btn-info btn-block rounded-0' />
                    </div>
                </div>
                <div className='[col-xs-6 col-sm-offset-1 col-sm-4 col-md-6]'>
                    {<h2>Guest Entries Book <span>{this.state.entries.length}</span></h2>}
                    {listView}
                </div>
            </div>
            </div>
        );
    }
}

export default EntriesForm;
