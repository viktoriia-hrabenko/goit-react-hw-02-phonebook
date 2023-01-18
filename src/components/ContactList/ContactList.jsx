import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css'


export class ContactList extends Component {
    render() {
        const { contacts, deleteContact } = this.props;
        
        return (
            <ul>
                {contacts.map(({ id, name, number }) => {
                    return (
                        <li key={id}>
                            <p>
                                {name}: {number}
                            </p>
                            <button className={css.listDeleteButton} type="button" onClick={() => deleteContact(id)}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
        )
    }
}
 

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};