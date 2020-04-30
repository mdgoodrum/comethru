--
-- PostgreSQL database dump
--

-- Dumped from database version 12.1
-- Dumped by pg_dump version 12.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: api_address; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_address (
    id integer NOT NULL,
    street_number integer NOT NULL,
    street_name text NOT NULL,
    street_type text NOT NULL,
    street_direction text NOT NULL,
    address_type text NOT NULL,
    address_type_id text NOT NULL,
    minor_municipality text NOT NULL,
    major_municipality text NOT NULL,
    governing_district text NOT NULL,
    postal_area text NOT NULL,
    country text NOT NULL
);


ALTER TABLE public.api_address OWNER TO comethru_admin;

--
-- Name: api_address_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.api_address_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_address_id_seq OWNER TO comethru_admin;

--
-- Name: api_address_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.api_address_id_seq OWNED BY public.api_address.id;


--
-- Name: api_event; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_event (
    id integer NOT NULL,
    title character varying(128) NOT NULL,
    date_published timestamp with time zone NOT NULL,
    short_description text NOT NULL,
    description text NOT NULL,
    twenty_one boolean NOT NULL,
    start_time timestamp with time zone NOT NULL,
    end_time timestamp with time zone NOT NULL,
    organizer_id integer NOT NULL,
    venue_id integer
);


ALTER TABLE public.api_event OWNER TO comethru_admin;

--
-- Name: api_event_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.api_event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_event_id_seq OWNER TO comethru_admin;

--
-- Name: api_event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.api_event_id_seq OWNED BY public.api_event.id;


--
-- Name: api_event_tags; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_event_tags (
    id integer NOT NULL,
    event_id integer NOT NULL,
    tag_id integer NOT NULL
);


ALTER TABLE public.api_event_tags OWNER TO comethru_admin;

--
-- Name: api_event_tags_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.api_event_tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_event_tags_id_seq OWNER TO comethru_admin;

--
-- Name: api_event_tags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.api_event_tags_id_seq OWNED BY public.api_event_tags.id;


--
-- Name: api_tag; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_tag (
    id integer NOT NULL,
    name character varying(32) NOT NULL
);


ALTER TABLE public.api_tag OWNER TO comethru_admin;

--
-- Name: api_tag_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.api_tag_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_tag_id_seq OWNER TO comethru_admin;

--
-- Name: api_tag_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.api_tag_id_seq OWNED BY public.api_tag.id;


--
-- Name: api_user; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);


ALTER TABLE public.api_user OWNER TO comethru_admin;

--
-- Name: api_user_groups; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.api_user_groups OWNER TO comethru_admin;

--
-- Name: api_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.api_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_user_groups_id_seq OWNER TO comethru_admin;

--
-- Name: api_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.api_user_groups_id_seq OWNED BY public.api_user_groups.id;


--
-- Name: api_user_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.api_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_user_id_seq OWNER TO comethru_admin;

--
-- Name: api_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.api_user_id_seq OWNED BY public.api_user.id;


--
-- Name: api_user_user_permissions; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.api_user_user_permissions OWNER TO comethru_admin;

--
-- Name: api_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.api_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_user_user_permissions_id_seq OWNER TO comethru_admin;

--
-- Name: api_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.api_user_user_permissions_id_seq OWNED BY public.api_user_user_permissions.id;


--
-- Name: api_venue; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_venue (
    id integer NOT NULL,
    name text NOT NULL,
    twenty_one boolean NOT NULL,
    address_id integer
);


ALTER TABLE public.api_venue OWNER TO comethru_admin;

--
-- Name: api_venue_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.api_venue_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.api_venue_id_seq OWNER TO comethru_admin;

--
-- Name: api_venue_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.api_venue_id_seq OWNED BY public.api_venue.id;


--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);


ALTER TABLE public.auth_group OWNER TO comethru_admin;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_id_seq OWNER TO comethru_admin;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_group_permissions OWNER TO comethru_admin;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_group_permissions_id_seq OWNER TO comethru_admin;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE public.auth_permission OWNER TO comethru_admin;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_permission_id_seq OWNER TO comethru_admin;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE public.django_admin_log OWNER TO comethru_admin;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_admin_log_id_seq OWNER TO comethru_admin;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE public.django_content_type OWNER TO comethru_admin;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_content_type_id_seq OWNER TO comethru_admin;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE public.django_migrations OWNER TO comethru_admin;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.django_migrations_id_seq OWNER TO comethru_admin;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE public.django_session OWNER TO comethru_admin;

--
-- Name: api_address id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_address ALTER COLUMN id SET DEFAULT nextval('public.api_address_id_seq'::regclass);


--
-- Name: api_event id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event ALTER COLUMN id SET DEFAULT nextval('public.api_event_id_seq'::regclass);


--
-- Name: api_event_tags id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event_tags ALTER COLUMN id SET DEFAULT nextval('public.api_event_tags_id_seq'::regclass);


--
-- Name: api_tag id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_tag ALTER COLUMN id SET DEFAULT nextval('public.api_tag_id_seq'::regclass);


--
-- Name: api_user id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user ALTER COLUMN id SET DEFAULT nextval('public.api_user_id_seq'::regclass);


--
-- Name: api_user_groups id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_groups ALTER COLUMN id SET DEFAULT nextval('public.api_user_groups_id_seq'::regclass);


--
-- Name: api_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.api_user_user_permissions_id_seq'::regclass);


--
-- Name: api_venue id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_venue ALTER COLUMN id SET DEFAULT nextval('public.api_venue_id_seq'::regclass);


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);


--
-- Data for Name: api_address; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_address (id, street_number, street_name, street_type, street_direction, address_type, address_type_id, minor_municipality, major_municipality, governing_district, postal_area, country) FROM stdin;
1	1089	Mecaslin	Street	NW			Home Park	Atlanta	Georgia	30318	USA
\.


--
-- Data for Name: api_event; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_event (id, title, date_published, short_description, description, twenty_one, start_time, end_time, organizer_id, venue_id) FROM stdin;
1	drink beer at spader's house	2020-04-26 18:24:18-04	we're drinking beer at my house	we're drinking **beer** at my house!	f	2020-04-26 18:25:32-04	2020-04-26 18:25:32-04	1	1
\.


--
-- Data for Name: api_event_tags; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_event_tags (id, event_id, tag_id) FROM stdin;
1	1	1
\.


--
-- Data for Name: api_tag; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_tag (id, name) FROM stdin;
1	beer
\.


--
-- Data for Name: api_user; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$180000$UNBghYZLDdch$XRfAA09+zD44ShFWuiayPKoyC1DT+KW4bi0I7TC5fXQ=	2020-04-26 18:24:03.728223-04	t	spader			thomas.spader@gmail.com	t	t	2020-04-26 17:12:50.370685-04
\.


--
-- Data for Name: api_user_groups; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: api_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: api_venue; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_venue (id, name, twenty_one, address_id) FROM stdin;
1	spader's house	f	1
\.


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.auth_group (id, name) FROM stdin;
\.


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add user	1	add_user
2	Can change user	1	change_user
3	Can delete user	1	delete_user
4	Can view user	1	view_user
5	Can add address	2	add_address
6	Can change address	2	change_address
7	Can delete address	2	delete_address
8	Can view address	2	view_address
9	Can add tag	3	add_tag
10	Can change tag	3	change_tag
11	Can delete tag	3	delete_tag
12	Can view tag	3	view_tag
13	Can add venue	4	add_venue
14	Can change venue	4	change_venue
15	Can delete venue	4	delete_venue
16	Can view venue	4	view_venue
17	Can add event	5	add_event
18	Can change event	5	change_event
19	Can delete event	5	delete_event
20	Can view event	5	view_event
21	Can add log entry	6	add_logentry
22	Can change log entry	6	change_logentry
23	Can delete log entry	6	delete_logentry
24	Can view log entry	6	view_logentry
25	Can add permission	7	add_permission
26	Can change permission	7	change_permission
27	Can delete permission	7	delete_permission
28	Can view permission	7	view_permission
29	Can add group	8	add_group
30	Can change group	8	change_group
31	Can delete group	8	delete_group
32	Can view group	8	view_group
33	Can add content type	9	add_contenttype
34	Can change content type	9	change_contenttype
35	Can delete content type	9	delete_contenttype
36	Can view content type	9	view_contenttype
37	Can add session	10	add_session
38	Can change session	10	change_session
39	Can delete session	10	delete_session
40	Can view session	10	view_session
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2020-04-26 18:24:49.256545-04	1	beer	1	[{"added": {}}]	3	1
2	2020-04-26 18:25:19.760135-04	1	1089 Mecaslin Street	1	[{"added": {}}]	2	1
3	2020-04-26 18:25:26.12971-04	1	spader's house	1	[{"added": {}}]	4	1
4	2020-04-26 18:25:35.295577-04	1	drink beer at spader's house	1	[{"added": {}}]	5	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	api	user
2	api	address
3	api	tag
4	api	venue
5	api	event
6	admin	logentry
7	auth	permission
8	auth	group
9	contenttypes	contenttype
10	sessions	session
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-04-26 17:11:30.321057-04
2	contenttypes	0002_remove_content_type_name	2020-04-26 17:11:30.348175-04
3	auth	0001_initial	2020-04-26 17:11:30.399605-04
4	auth	0002_alter_permission_name_max_length	2020-04-26 17:11:30.438531-04
5	auth	0003_alter_user_email_max_length	2020-04-26 17:11:30.465642-04
6	auth	0004_alter_user_username_opts	2020-04-26 17:11:30.489677-04
7	auth	0005_alter_user_last_login_null	2020-04-26 17:11:30.504619-04
8	auth	0006_require_contenttypes_0002	2020-04-26 17:11:30.511278-04
9	auth	0007_alter_validators_add_error_messages	2020-04-26 17:11:30.524874-04
10	auth	0008_alter_user_username_max_length	2020-04-26 17:11:30.541541-04
11	auth	0009_alter_user_last_name_max_length	2020-04-26 17:11:30.557378-04
12	auth	0010_alter_group_name_max_length	2020-04-26 17:11:30.578444-04
13	auth	0011_update_proxy_permissions	2020-04-26 17:11:30.592683-04
14	api	0001_initial	2020-04-26 17:11:30.716591-04
15	admin	0001_initial	2020-04-26 17:11:30.795824-04
16	admin	0002_logentry_remove_auto_add	2020-04-26 17:11:30.835309-04
17	admin	0003_logentry_add_action_flag_choices	2020-04-26 17:11:30.873177-04
18	sessions	0001_initial	2020-04-26 17:11:30.890209-04
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
6s10i6kh3yyz1ikdwlvhvq8xoma5j0pu	MGUxMjljNmE4NTM5NmQ2ZmU4NTNkODk2Y2UwNGZlZTU2MzczODI5Nzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIxYWU1YWZmOTRhZjI5NDk5MjAyYzg4ODJiZmY4N2MyMjM1ZGQxZThkIn0=	2020-05-10 18:24:03.732215-04
\.


--
-- Name: api_address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_address_id_seq', 1, true);


--
-- Name: api_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_event_id_seq', 1, true);


--
-- Name: api_event_tags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_event_tags_id_seq', 1, true);


--
-- Name: api_tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_tag_id_seq', 1, true);


--
-- Name: api_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_user_groups_id_seq', 1, false);


--
-- Name: api_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_user_id_seq', 2, true);


--
-- Name: api_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_user_user_permissions_id_seq', 1, false);


--
-- Name: api_venue_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_venue_id_seq', 1, true);


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 40, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 4, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 10, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 18, true);


--
-- Name: api_address api_address_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_address
    ADD CONSTRAINT api_address_pkey PRIMARY KEY (id);


--
-- Name: api_event api_event_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event
    ADD CONSTRAINT api_event_pkey PRIMARY KEY (id);


--
-- Name: api_event_tags api_event_tags_event_id_tag_id_500cb35b_uniq; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event_tags
    ADD CONSTRAINT api_event_tags_event_id_tag_id_500cb35b_uniq UNIQUE (event_id, tag_id);


--
-- Name: api_event_tags api_event_tags_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event_tags
    ADD CONSTRAINT api_event_tags_pkey PRIMARY KEY (id);


--
-- Name: api_tag api_tag_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_tag
    ADD CONSTRAINT api_tag_pkey PRIMARY KEY (id);


--
-- Name: api_user_groups api_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_groups
    ADD CONSTRAINT api_user_groups_pkey PRIMARY KEY (id);


--
-- Name: api_user_groups api_user_groups_user_id_group_id_9c7ddfb5_uniq; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_groups
    ADD CONSTRAINT api_user_groups_user_id_group_id_9c7ddfb5_uniq UNIQUE (user_id, group_id);


--
-- Name: api_user api_user_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user
    ADD CONSTRAINT api_user_pkey PRIMARY KEY (id);


--
-- Name: api_user_user_permissions api_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_user_permissions
    ADD CONSTRAINT api_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: api_user_user_permissions api_user_user_permissions_user_id_permission_id_a06dd704_uniq; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_user_permissions
    ADD CONSTRAINT api_user_user_permissions_user_id_permission_id_a06dd704_uniq UNIQUE (user_id, permission_id);


--
-- Name: api_user api_user_username_key; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user
    ADD CONSTRAINT api_user_username_key UNIQUE (username);


--
-- Name: api_venue api_venue_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_venue
    ADD CONSTRAINT api_venue_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: api_event_organizer_id_e13d0573; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_event_organizer_id_e13d0573 ON public.api_event USING btree (organizer_id);


--
-- Name: api_event_tags_event_id_553fd8f4; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_event_tags_event_id_553fd8f4 ON public.api_event_tags USING btree (event_id);


--
-- Name: api_event_tags_tag_id_e3d2e19b; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_event_tags_tag_id_e3d2e19b ON public.api_event_tags USING btree (tag_id);


--
-- Name: api_event_venue_id_c969ab0a; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_event_venue_id_c969ab0a ON public.api_event USING btree (venue_id);


--
-- Name: api_user_groups_group_id_3af85785; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_user_groups_group_id_3af85785 ON public.api_user_groups USING btree (group_id);


--
-- Name: api_user_groups_user_id_a5ff39fa; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_user_groups_user_id_a5ff39fa ON public.api_user_groups USING btree (user_id);


--
-- Name: api_user_user_permissions_permission_id_305b7fea; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_user_user_permissions_permission_id_305b7fea ON public.api_user_user_permissions USING btree (permission_id);


--
-- Name: api_user_user_permissions_user_id_f3945d65; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_user_user_permissions_user_id_f3945d65 ON public.api_user_user_permissions USING btree (user_id);


--
-- Name: api_user_username_cf4e88d2_like; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_user_username_cf4e88d2_like ON public.api_user USING btree (username varchar_pattern_ops);


--
-- Name: api_venue_address_id_7a43179a; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX api_venue_address_id_7a43179a ON public.api_venue USING btree (address_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: api_event api_event_organizer_id_e13d0573_fk_api_user_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event
    ADD CONSTRAINT api_event_organizer_id_e13d0573_fk_api_user_id FOREIGN KEY (organizer_id) REFERENCES public.api_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: api_event_tags api_event_tags_event_id_553fd8f4_fk_api_event_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event_tags
    ADD CONSTRAINT api_event_tags_event_id_553fd8f4_fk_api_event_id FOREIGN KEY (event_id) REFERENCES public.api_event(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: api_event_tags api_event_tags_tag_id_e3d2e19b_fk_api_tag_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event_tags
    ADD CONSTRAINT api_event_tags_tag_id_e3d2e19b_fk_api_tag_id FOREIGN KEY (tag_id) REFERENCES public.api_tag(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: api_event api_event_venue_id_c969ab0a_fk_api_venue_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_event
    ADD CONSTRAINT api_event_venue_id_c969ab0a_fk_api_venue_id FOREIGN KEY (venue_id) REFERENCES public.api_venue(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: api_user_groups api_user_groups_group_id_3af85785_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_groups
    ADD CONSTRAINT api_user_groups_group_id_3af85785_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: api_user_groups api_user_groups_user_id_a5ff39fa_fk_api_user_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_groups
    ADD CONSTRAINT api_user_groups_user_id_a5ff39fa_fk_api_user_id FOREIGN KEY (user_id) REFERENCES public.api_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: api_user_user_permissions api_user_user_permis_permission_id_305b7fea_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_user_permissions
    ADD CONSTRAINT api_user_user_permis_permission_id_305b7fea_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: api_user_user_permissions api_user_user_permissions_user_id_f3945d65_fk_api_user_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user_user_permissions
    ADD CONSTRAINT api_user_user_permissions_user_id_f3945d65_fk_api_user_id FOREIGN KEY (user_id) REFERENCES public.api_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: api_venue api_venue_address_id_7a43179a_fk_api_address_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_venue
    ADD CONSTRAINT api_venue_address_id_7a43179a_fk_api_address_id FOREIGN KEY (address_id) REFERENCES public.api_address(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_api_user_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_api_user_id FOREIGN KEY (user_id) REFERENCES public.api_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

