import React,{Component} from 'react';

class SearchBar extends Component {
    state = {searchTerm: null};

    inputChange = input => {
        this.setState({searchTerm: input.target.value});
    }

    termSubmit = (event) => {
        event.preventDefault();
        this.props.termSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className="search-bar ui">
                <form className="ui form" onSubmit={this.termSubmit}>
                    <div className="ui fluid icon input">
                        <input type="text" placeholder="Search" onChange={this.inputChange} />
                        <button type="submit" className="ui button">
                            <i className="search icon" />
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;