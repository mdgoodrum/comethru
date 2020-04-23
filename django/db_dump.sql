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
    description text NOT NULL,
    twenty_one boolean NOT NULL,
    organizer_id integer NOT NULL,
    venue_id integer,
    end_time timestamp with time zone NOT NULL,
    start_time timestamp with time zone NOT NULL,
    short_description text NOT NULL
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
    name text NOT NULL,
    email text NOT NULL,
    phone_number text NOT NULL
);


ALTER TABLE public.api_user OWNER TO comethru_admin;

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
-- Name: api_venue; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.api_venue (
    id integer NOT NULL,
    name text NOT NULL,
    address_id integer,
    twenty_one boolean NOT NULL
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
-- Name: auth_user; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.auth_user (
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


ALTER TABLE public.auth_user OWNER TO comethru_admin;

--
-- Name: auth_user_groups; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE public.auth_user_groups OWNER TO comethru_admin;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_groups_id_seq OWNER TO comethru_admin;

--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;


--
-- Name: auth_user_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_id_seq OWNER TO comethru_admin;

--
-- Name: auth_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;


--
-- Name: auth_user_user_permissions; Type: TABLE; Schema: public; Owner: comethru_admin
--

CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE public.auth_user_user_permissions OWNER TO comethru_admin;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: comethru_admin
--

CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.auth_user_user_permissions_id_seq OWNER TO comethru_admin;

--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: comethru_admin
--

ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;


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
-- Name: auth_user id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);


--
-- Name: auth_user_groups id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);


--
-- Name: auth_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);


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

COPY public.api_event (id, title, date_published, description, twenty_one, organizer_id, venue_id, end_time, start_time, short_description) FROM stdin;
1	Beer, Bourbon & BBQ	2020-03-31 20:41:56-04	#Lorem ipsum dolor sit amet!\r\n\r\n*Consectetur* **adipiscing** _elit_. Maecenas non quam ac quam volutpat venenatis a ac augue. In pretium, sem eu vehicula mollis, ex mi condimentum mauris, ut bibendum arcu massa id metus. Duis sed tortor tellus. Aenean finibus viverra magna, eget consequat odio tristique eget. Suspendisse maximus erat a nisi gravida, id condimentum sem egestas. Morbi vehicula magna tortor, in suscipit lacus feugiat in. Sed et maximus ante, in dapibus nunc. Phasellus varius dolor ut sem mattis, eu volutpat orci tincidunt. Fusce dapibus ipsum et elit tristique rutrum. Suspendisse sit amet accumsan sapien. Morbi at blandit mauris, non aliquam tortor. Cras volutpat sagittis sem nec dictum. Maecenas dui arcu, aliquet quis libero a, tincidunt mollis mauris. Praesent feugiat purus a nunc dignissim, in efficitur mi condimentum. Vestibulum feugiat risus et sem mollis, sit amet laoreet tortor vehicula.\r\n\r\nMaecenas nulla sapien, pharetra et enim at, vulputate rhoncus nisi. Donec et sapien sit amet turpis molestie viverra. Etiam sit amet aliquam sapien, quis maximus nulla. Praesent vehicula metus eget iaculis malesuada. Vivamus porta ligula nulla, eu tincidunt ex semper nec. Integer eget massa odio. Donec auctor nec felis et vestibulum. Vestibulum in massa non justo auctor laoreet vel et ipsum. Duis pellentesque justo eu nisi sollicitudin dignissim. Donec pharetra efficitur tempor. Nam id ex facilisis, tincidunt velit id, auctor erat. Quisque at placerat dui, sit amet malesuada metus.\r\n\r\nNulla in venenatis tortor, facilisis condimentum eros. Vestibulum id neque facilisis, pharetra massa non, scelerisque neque. Aenean et velit nec nisl dapibus molestie. Praesent euismod magna ac orci mollis ullamcorper. Pellentesque ultricies, dolor eget fermentum consectetur, ex libero bibendum dolor, accumsan iaculis ex nisi ultrices lectus. Integer quam magna, dignissim sit amet magna ut, euismod finibus ex. Quisque gravida turpis quis sem tincidunt posuere.\r\n\r\nDonec volutpat convallis ipsum, tempor tincidunt massa laoreet a. Sed non mauris vitae nisl aliquet venenatis a id lectus. Nulla blandit, elit eu mollis hendrerit, ante lorem tincidunt ante, non mattis dui nulla eu magna. Pellentesque sit amet blandit nisl, lobortis sagittis metus. In hac habitasse platea dictumst. Maecenas finibus tincidunt ultricies. Proin et eleifend sem. Etiam risus libero, venenatis mattis nisl ac, aliquet pretium diam.\r\n\r\nAliquam erat volutpat. Sed euismod, purus nec bibendum viverra, nulla ligula suscipit dolor, a viverra leo dolor eget orci. Etiam quis ante scelerisque ante luctus efficitur. Praesent mauris ex, ullamcorper non mollis eget, luctus at quam. Vivamus lacinia justo non tristique consequat. In hac habitasse platea dictumst. Aliquam id urna dignissim, maximus libero non, blandit velit. Curabitur a ex mi. Nulla laoreet fermentum bibendum. Curabitur placerat quam eget suscipit maximus. Maecenas dictum blandit dui sed elementum.	t	2	1	2020-04-22 20:00:00-04	2020-04-22 20:48:39-04	Barbecue, bitches. It's what we got
\.


--
-- Data for Name: api_event_tags; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_event_tags (id, event_id, tag_id) FROM stdin;
1	1	1
2	1	2
3	1	3
\.


--
-- Data for Name: api_tag; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_tag (id, name) FROM stdin;
1	alcohol
2	beer
3	bbq
\.


--
-- Data for Name: api_user; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_user (id, name, email, phone_number) FROM stdin;
1	Thomas Spader	thomas.spader@gmail.com	706-416-1799
2	Michael Goodrum	michaeldgoodrum@gmail.com	4044044044
\.


--
-- Data for Name: api_venue; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.api_venue (id, name, address_id, twenty_one) FROM stdin;
1	Spader's House	1	f
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
1	Can add tag	1	add_tag
2	Can change tag	1	change_tag
3	Can delete tag	1	delete_tag
4	Can view tag	1	view_tag
5	Can add user	2	add_user
6	Can change user	2	change_user
7	Can delete user	2	delete_user
8	Can view user	2	view_user
9	Can add event	3	add_event
10	Can change event	3	change_event
11	Can delete event	3	delete_event
12	Can view event	3	view_event
13	Can add venue	4	add_venue
14	Can change venue	4	change_venue
15	Can delete venue	4	delete_venue
16	Can view venue	4	view_venue
17	Can add address	5	add_address
18	Can change address	5	change_address
19	Can delete address	5	delete_address
20	Can view address	5	view_address
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
33	Can add user	9	add_user
34	Can change user	9	change_user
35	Can delete user	9	delete_user
36	Can view user	9	view_user
37	Can add content type	10	add_contenttype
38	Can change content type	10	change_contenttype
39	Can delete content type	10	delete_contenttype
40	Can view content type	10	view_contenttype
41	Can add session	11	add_session
42	Can change session	11	change_session
43	Can delete session	11	delete_session
44	Can view session	11	view_session
\.


--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
1	pbkdf2_sha256$180000$YN5VH2VoVfb0$5A6CXqBDK+v1baVd6FiB2vzmaGyFvd7J5SEjbt0clDo=	2020-04-21 22:04:57.412105-04	t	spader			thomas.spader@gmail.com	t	t	2020-04-21 22:04:46.165061-04
\.


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2020-04-22 20:42:04.598294-04	1	alcohol	1	[{"added": {}}]	1	1
2	2020-04-22 20:42:09.889093-04	2	beer	1	[{"added": {}}]	1	1
3	2020-04-22 20:42:13.818722-04	3	bbq	1	[{"added": {}}]	1	1
4	2020-04-22 20:45:51.29967-04	1	Address object (1)	1	[{"added": {}}]	5	1
5	2020-04-22 20:47:45.878863-04	1	Thomas Spader	1	[{"added": {}}]	2	1
6	2020-04-22 20:48:10.814285-04	2	Michael Goodrum	1	[{"added": {}}]	2	1
7	2020-04-22 20:48:27.792914-04	1	Spader's House	1	[{"added": {}}]	4	1
8	2020-04-22 20:48:50.151466-04	1	Beer, Bourbon & BBQ	1	[{"added": {}}]	3	1
9	2020-04-22 20:50:16.808768-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
10	2020-04-22 20:50:29.682577-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
11	2020-04-22 20:50:39.191763-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
12	2020-04-22 20:51:02.271323-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
13	2020-04-22 20:54:41.011042-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
14	2020-04-22 20:56:19.731801-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
15	2020-04-22 20:57:21.728457-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
16	2020-04-22 20:57:38.996205-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
17	2020-04-22 20:57:48.759655-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
18	2020-04-22 20:58:46.977365-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
19	2020-04-22 20:58:56.279338-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
20	2020-04-22 20:59:30.52908-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
21	2020-04-22 20:59:42.024597-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
22	2020-04-22 20:59:53.451779-04	1	Beer, Bourbon & BBQ	2	[{"changed": {"fields": ["Description"]}}]	3	1
\.


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.django_content_type (id, app_label, model) FROM stdin;
1	api	tag
2	api	user
3	api	event
4	api	venue
5	api	address
6	admin	logentry
7	auth	permission
8	auth	group
9	auth	user
10	contenttypes	contenttype
11	sessions	session
\.


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2020-04-21 22:02:30.62768-04
2	auth	0001_initial	2020-04-21 22:02:30.664446-04
3	admin	0001_initial	2020-04-21 22:02:30.720214-04
4	admin	0002_logentry_remove_auto_add	2020-04-21 22:02:30.737494-04
5	admin	0003_logentry_add_action_flag_choices	2020-04-21 22:02:30.746967-04
6	api	0001_initial	2020-04-21 22:02:30.779997-04
7	api	0002_auto_20200128_2236	2020-04-21 22:02:30.811453-04
8	api	0003_auto_20200210_0358	2020-04-21 22:02:30.83453-04
9	api	0004_auto_20200422_0141	2020-04-21 22:02:30.859752-04
10	contenttypes	0002_remove_content_type_name	2020-04-21 22:02:30.893487-04
11	auth	0002_alter_permission_name_max_length	2020-04-21 22:02:30.905528-04
12	auth	0003_alter_user_email_max_length	2020-04-21 22:02:30.922793-04
13	auth	0004_alter_user_username_opts	2020-04-21 22:02:30.938608-04
14	auth	0005_alter_user_last_login_null	2020-04-21 22:02:30.953857-04
15	auth	0006_require_contenttypes_0002	2020-04-21 22:02:30.956159-04
16	auth	0007_alter_validators_add_error_messages	2020-04-21 22:02:30.975019-04
17	auth	0008_alter_user_username_max_length	2020-04-21 22:02:30.993815-04
18	auth	0009_alter_user_last_name_max_length	2020-04-21 22:02:31.016101-04
19	auth	0010_alter_group_name_max_length	2020-04-21 22:02:31.032095-04
20	auth	0011_update_proxy_permissions	2020-04-21 22:02:31.054606-04
21	sessions	0001_initial	2020-04-21 22:02:31.062697-04
22	api	0005_auto_20200423_0052	2020-04-22 20:52:28.913112-04
\.


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: comethru_admin
--

COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
d5bzsuwgaz86d7i9a4i9rrxq3fmyfubz	MzNiNTM2ZmI3ZjBlOTYwNzZiNDNhMGU1N2Y1NWE0YjY5OTI4MGUwYzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIwNDA5ZWYxYTdmMjgwNmFkMjJkNzQwZjcwNzkwYzFhY2VjNmQyZTk2In0=	2020-05-05 22:04:57.414867-04
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

SELECT pg_catalog.setval('public.api_event_tags_id_seq', 3, true);


--
-- Name: api_tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_tag_id_seq', 3, true);


--
-- Name: api_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.api_user_id_seq', 2, true);


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

SELECT pg_catalog.setval('public.auth_permission_id_seq', 44, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 22, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 11, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: comethru_admin
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 22, true);


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
-- Name: api_user api_user_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.api_user
    ADD CONSTRAINT api_user_pkey PRIMARY KEY (id);


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
-- Name: auth_user_groups auth_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);


--
-- Name: auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);


--
-- Name: auth_user auth_user_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_user auth_user_username_key; Type: CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);


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
-- Name: auth_user_groups_group_id_97559544; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);


--
-- Name: auth_user_groups_user_id_6a12ed8b; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);


--
-- Name: auth_user_user_permissions_permission_id_1fbb5f2c; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);


--
-- Name: auth_user_user_permissions_user_id_a95ead1b; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);


--
-- Name: auth_user_username_6821ab7c_like; Type: INDEX; Schema: public; Owner: comethru_admin
--

CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);


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
-- Name: auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id; Type: FK CONSTRAINT; Schema: public; Owner: comethru_admin
--

ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

