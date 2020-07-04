SET client_min_messages = error;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

DROP TABLE IF EXISTS public.contacts CASCADE;

CREATE TABLE public.contacts (
    id             UUID PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
    email          VARCHAR(255) NOT NULL,
    firstname      VARCHAR(255),
    lastname       VARCHAR(255),
    website        VARCHAR(255),
    streetaddress  VARCHAR(255),
    phone          VARCHAR(255),
    companyname    VARCHAR(255),
    created_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX contacts_email_index ON public.contacts (email);


DROP TABLE IF EXISTS public.menu CASCADE;

CREATE TABLE public.menu (
    id             SERIAL PRIMARY KEY,
    title          VARCHAR(255) NOT NULL,
    category_id    INT,
    price          NUMERIC(8, 2),
    desc1          VARCHAR(255),
    isenabled      BOOLEAN NOT NULL DEFAULT TRUE,   
    created_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS public.menucategories CASCADE;

CREATE TABLE public.menucategories (
    id             SERIAL PRIMARY KEY,
    catname        VARCHAR(255) NOT NULL,
    created_at     TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
