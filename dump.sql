PGDMP     $    ,                {            shortly %   12.14 (Ubuntu 12.14-0ubuntu0.20.04.1) %   12.14 (Ubuntu 12.14-0ubuntu0.20.04.1) #    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24608    shortly    DATABASE     y   CREATE DATABASE shortly WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'pt_BR.UTF-8' LC_CTYPE = 'pt_BR.UTF-8';
    DROP DATABASE shortly;
                postgres    false            �            1259    24678    sessions    TABLE     �   CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.sessions;
       public         heap    postgres    false            �            1259    24676    sessions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.sessions_id_seq;
       public          postgres    false    205            �           0    0    sessions_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;
          public          postgres    false    204            �            1259    24695    shorts    TABLE     �   CREATE TABLE public.shorts (
    id integer NOT NULL,
    url text NOT NULL,
    shorturl text NOT NULL,
    "userId" integer,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.shorts;
       public         heap    postgres    false            �            1259    24693    shorts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.shorts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.shorts_id_seq;
       public          postgres    false    207            �           0    0    shorts_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.shorts_id_seq OWNED BY public.shorts.id;
          public          postgres    false    206            �            1259    24666    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24664    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    203            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    202            �            1259    24712    visits    TABLE     �   CREATE TABLE public.visits (
    id integer NOT NULL,
    "shortId" integer,
    visit integer DEFAULT 1 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.visits;
       public         heap    postgres    false            �            1259    24710    visits_id_seq    SEQUENCE     �   CREATE SEQUENCE public.visits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.visits_id_seq;
       public          postgres    false    209            �           0    0    visits_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.visits_id_seq OWNED BY public.visits.id;
          public          postgres    false    208            )           2604    24681    sessions id    DEFAULT     j   ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);
 :   ALTER TABLE public.sessions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            +           2604    24698 	   shorts id    DEFAULT     f   ALTER TABLE ONLY public.shorts ALTER COLUMN id SET DEFAULT nextval('public.shorts_id_seq'::regclass);
 8   ALTER TABLE public.shorts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207            '           2604    24669    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202    203            -           2604    24715 	   visits id    DEFAULT     f   ALTER TABLE ONLY public.visits ALTER COLUMN id SET DEFAULT nextval('public.visits_id_seq'::regclass);
 8   ALTER TABLE public.visits ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            �          0    24678    sessions 
   TABLE DATA           D   COPY public.sessions (id, "userId", token, "createdAt") FROM stdin;
    public          postgres    false    205   �%       �          0    24695    shorts 
   TABLE DATA           J   COPY public.shorts (id, url, shorturl, "userId", "createdAt") FROM stdin;
    public          postgres    false    207   �%       �          0    24666    users 
   TABLE DATA           G   COPY public.users (id, name, email, password, "createdAt") FROM stdin;
    public          postgres    false    203   �%       �          0    24712    visits 
   TABLE DATA           C   COPY public.visits (id, "shortId", visit, "createdAt") FROM stdin;
    public          postgres    false    209   �%       �           0    0    sessions_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.sessions_id_seq', 1, false);
          public          postgres    false    204            �           0    0    shorts_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.shorts_id_seq', 1, false);
          public          postgres    false    206            �           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    202            �           0    0    visits_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.visits_id_seq', 1, false);
          public          postgres    false    208            3           2606    24687    sessions sessions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public            postgres    false    205            5           2606    24704    shorts shorts_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.shorts
    ADD CONSTRAINT shorts_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.shorts DROP CONSTRAINT shorts_pkey;
       public            postgres    false    207            1           2606    24675    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203            7           2606    24719    visits visits_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.visits DROP CONSTRAINT visits_pkey;
       public            postgres    false    209            8           2606    24688    sessions sessions_userId_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);
 I   ALTER TABLE ONLY public.sessions DROP CONSTRAINT "sessions_userId_fkey";
       public          postgres    false    2865    203    205            9           2606    24705    shorts shorts_userId_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.shorts
    ADD CONSTRAINT "shorts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);
 E   ALTER TABLE ONLY public.shorts DROP CONSTRAINT "shorts_userId_fkey";
       public          postgres    false    207    2865    203            :           2606    24720    visits visits_shortId_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.visits
    ADD CONSTRAINT "visits_shortId_fkey" FOREIGN KEY ("shortId") REFERENCES public.shorts(id);
 F   ALTER TABLE ONLY public.visits DROP CONSTRAINT "visits_shortId_fkey";
       public          postgres    false    209    2869    207            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �     