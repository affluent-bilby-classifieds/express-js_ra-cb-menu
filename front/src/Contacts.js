import React from 'react';
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput, EmailField, UrlField } from 'react-admin';

export const ContactList = (props) => (
    <List {...props}>
        <Datagrid>
            
            <TextField source="companyname" />
            <TextField source="firstname" />
            <TextField source="lastname" />
            <EmailField source="email" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="streetaddress" />
            
            <EditButton basePath="/contacts" />
        </Datagrid>
    </List>
);

const ContactTitle = ({ record }) => {
    return <span>Contact {record ? `"${record.firstname}"` : ''}</span>;
};

export const ContactEdit = (props) => (
    <Edit title={<ContactTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            
            <TextInput source="companyname" />
           
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="streetaddress" />
            
        </SimpleForm>
    </Edit>
);

export const ContactCreate = (props) => (
    <Create title="Create a Contact" {...props}>
        <SimpleForm>
            <TextInput source="email" />
            <TextInput source="companyname" />
           
            <TextInput source="firstname" />
            <TextInput source="lastname" />
            <TextInput source="email" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="streetaddress" />
        </SimpleForm>
    </Create>
);

    © 2020 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

