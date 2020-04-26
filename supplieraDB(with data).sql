--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2 (Ubuntu 12.2-2.pgdg16.04+1)
-- Dumped by pg_dump version 12.2 (Ubuntu 12.2-2.pgdg16.04+1)

-- Started on 2020-04-26 17:24:29 CEST

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

DROP DATABASE suppliera1;
--
-- TOC entry 2933 (class 1262 OID 16386)
-- Name: suppliera1; Type: DATABASE; Schema: -; Owner: -
--

CREATE DATABASE suppliera1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';


\connect suppliera1

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
-- TOC entry 204 (class 1259 OID 16394)
-- Name: brands; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.brands (
    "brandId" bigint NOT NULL,
    "brandName" character(24)
);


--
-- TOC entry 205 (class 1259 OID 16399)
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    "categoryId" bigint NOT NULL,
    "categoryName" character(24)
);


--
-- TOC entry 206 (class 1259 OID 16404)
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    "orderId" bigint NOT NULL,
    "userId" bigint,
    "productId" bigint
);


--
-- TOC entry 203 (class 1259 OID 16389)
-- Name: product; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product (
    "productId" bigint NOT NULL,
    "productImageSource" character varying(100),
    "productCode" character varying(10),
    "productName" character varying(100),
    "productDescription" character varying(200),
    "productStock" integer,
    "productPrice" bigint,
    "productBrand" bigint,
    "productCategory" bigint
);


--
-- TOC entry 202 (class 1259 OID 16387)
-- Name: product_productId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.product ALTER COLUMN "productId" ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public."product_productId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 207 (class 1259 OID 16409)
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    "userId" bigint NOT NULL,
    "userName" character(24),
    "userPassword" character varying(50),
    "userEmail" character varying(50),
    "userFirstName" character varying(24),
    "userLastName" character varying(24),
    "userAddress" character varying(50),
    "userPhone" character varying(50),
    "userGender" boolean,
    "userBirthDate" date
);


--
-- TOC entry 2924 (class 0 OID 16394)
-- Dependencies: 204
-- Data for Name: brands; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.brands ("brandId", "brandName") VALUES (1, 'Nike                    ');
INSERT INTO public.brands ("brandId", "brandName") VALUES (2, 'Adidas                  ');
INSERT INTO public.brands ("brandId", "brandName") VALUES (3, 'Uniqlo                  ');
INSERT INTO public.brands ("brandId", "brandName") VALUES (4, 'Hanes                   ');
INSERT INTO public.brands ("brandId", "brandName") VALUES (5, 'Levi                    ');
INSERT INTO public.brands ("brandId", "brandName") VALUES (6, 'Wrangler                ');


--
-- TOC entry 2925 (class 0 OID 16399)
-- Dependencies: 205
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories ("categoryId", "categoryName") VALUES (1, 'Shoes                   ');
INSERT INTO public.categories ("categoryId", "categoryName") VALUES (2, 'T-Shirts                ');
INSERT INTO public.categories ("categoryId", "categoryName") VALUES (3, 'Pants                   ');


--
-- TOC entry 2926 (class 0 OID 16404)
-- Dependencies: 206
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- TOC entry 2923 (class 0 OID 16389)
-- Dependencies: 203
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.product ("productId", "productImageSource", "productCode", "productName", "productDescription", "productStock", "productPrice", "productBrand", "productCategory") VALUES (1, '/images/wranglerPants', '1', 'Cowboy Cut Slim Fit Jean', 'Wrangler® Cowboy Cut® jeans are a tried-and-true wardrobe staple for cowboys who demand a lot from their everyday clothes.', 100, 3900, 6, 3);
INSERT INTO public.product ("productId", "productImageSource", "productCode", "productName", "productDescription", "productStock", "productPrice", "productBrand", "productCategory") VALUES (2, '/images/hanesTShirt', '2', 'Hanes Men’s Everyday Short Sleeve Crewneck T-Shirt
', 'Experience real comfort with this Hanes Everyday Tee. Made with 5.2-oz. super soft cotton.', 100, 1000, 4, 2);
INSERT INTO public.product ("productId", "productImageSource", "productCode", "productName", "productDescription", "productStock", "productPrice", "productBrand", "productCategory") VALUES (3, '/images/nikeShoes', '3', 'Nike Air VaporMax 360', 'Featuring a full-length foam midsole and VaporMax Air unit, the Nike Air VaporMax 360 gives you remarkable underfoot comfort with bold 2000s style inspired by the Air Max 360.

', 50, 25000, 1, 1);


--
-- TOC entry 2927 (class 0 OID 16409)
-- Dependencies: 207
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users ("userId", "userName", "userPassword", "userEmail", "userFirstName", "userLastName", "userAddress", "userPhone", "userGender", "userBirthDate") VALUES (1, 'admin                   ', 'admin', 'admin@suppliera.com', 'Adminko', 'Adminić', 'Adminska 7', '12345678', true, '2017-03-14');


--
-- TOC entry 2934 (class 0 OID 0)
-- Dependencies: 202
-- Name: product_productId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."product_productId_seq"', 1, false);


--
-- TOC entry 2783 (class 2606 OID 16398)
-- Name: brands brands_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY ("brandId");


--
-- TOC entry 2785 (class 2606 OID 16403)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY ("categoryId");


--
-- TOC entry 2789 (class 2606 OID 16408)
-- Name: orders orders_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY ("orderId");


--
-- TOC entry 2781 (class 2606 OID 16393)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY ("productId");


--
-- TOC entry 2791 (class 2606 OID 16413)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY ("userId");


--
-- TOC entry 2778 (class 1259 OID 16419)
-- Name: fki_brand_fk; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_brand_fk ON public.product USING btree ("productBrand");


--
-- TOC entry 2779 (class 1259 OID 16425)
-- Name: fki_category_fk; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_category_fk ON public.product USING btree ("productCategory");


--
-- TOC entry 2786 (class 1259 OID 16437)
-- Name: fki_product_fk; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_product_fk ON public.orders USING btree ("productId");


--
-- TOC entry 2787 (class 1259 OID 16431)
-- Name: fki_user_fk; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX fki_user_fk ON public.orders USING btree ("userId");


--
-- TOC entry 2792 (class 2606 OID 16414)
-- Name: product brand_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT brand_fk FOREIGN KEY ("productBrand") REFERENCES public.brands("brandId") NOT VALID;


--
-- TOC entry 2793 (class 2606 OID 16420)
-- Name: product category_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT category_fk FOREIGN KEY ("productCategory") REFERENCES public.categories("categoryId") NOT VALID;


--
-- TOC entry 2795 (class 2606 OID 16432)
-- Name: orders product_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT product_fk FOREIGN KEY ("productId") REFERENCES public.product("productId") NOT VALID;


--
-- TOC entry 2794 (class 2606 OID 16426)
-- Name: orders user_fk; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT user_fk FOREIGN KEY ("userId") REFERENCES public.users("userId") NOT VALID;


-- Completed on 2020-04-26 17:24:29 CEST

--
-- PostgreSQL database dump complete
--
