import Loader from 'components/Loader';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  // selectContactsError,
  // selectContactsFilterTerm,
  selectContactsIsLoading,
} from 'redux/contacts.selectors';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'redux/contactsReducer';

const ContactsPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  // const error = useSelector(selectContactsError);
  // const filterTerm = useSelector(selectContactsFilterTerm);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = contact => {
    dispatch(addContact(contact));
    reset();
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <span>Name:</span>
          <input {...register('name', { required: true })} type="text" />
          {errors.name && <span>This field is required</span>}
        </label>
        <label>
          <span>Number:</span>
          <input {...register('number', { required: true })} type="text" />
          {errors.number && <span>This field is required</span>}
        </label>

        <button type="submit">Add contact</button>
      </form>

      {isLoading && <Loader />}
      <ul>
        {Array.isArray(contacts) &&
          contacts.map(contact => {
            return (
              <li key={contact.id}>
                <h3>{contact.name}</h3>
                <p>{contact.number}</p>
                <button onClick={() => onDeleteContact(contact.id)}>❌</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactsPage;
