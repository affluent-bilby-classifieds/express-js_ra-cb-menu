
Skip to content
Pull requests
Issues
Marketplace
Explore
@affluent-bilby-classifieds
Learn Git and GitHub without any code!

Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.
affluent-bilby-classifieds /
react-admin-and-postgraphile-playground
forked from stephane-klein/react-admin-and-postgraphile-playground

0
0

    1

Code
Pull requests
Actions
Projects
Wiki
Security
Insights

    Settings

react-admin-and-postgraphile-playground/frontend/src/Contacts.js /
@affluent-bilby-classifieds
affluent-bilby-classifieds Update Contacts.js
Latest commit 0cd4a1f 8 days ago
History
2 contributors
@affluent-bilby-classifieds
@stephane-klein
57 lines (47 sloc) 1.79 KB
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

