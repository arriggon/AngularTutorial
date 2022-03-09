# Angular tutorial

# Node server

## How to start

> Open a terminal in **/server/**
> 
> Execute `npm run start`
>
> Server should be listening at port **3000**

---

## API description

**GET `/health`**

> **Name:** Health endpoint
>
> > **Result**: *200 OK*


**GET `/books`**

> **Name:** Books endpoint
>
> > **Result**: 
> > ```
> > [
> >   {
> >       "isbn": string,
> >       "title": string,
> >       "author": string,
> >       "price": float
> >   }
> > ] 
> > ```
> > *JSON*


**POST `/book`**

> **Name:** Create book endpoint
>
> **Parameters**:
> ```
> {
>   "isbn": string,
>   "title": string,
>   "author": string,
>   "price": float
> }
> ```
> > **Result**: *201 CREATED*


**GET `/book/:isbn`**

> **Name:** Get book by ISBN
>
> > **Result:**
> > ```
> > {
> >  "isbn": string,
> >  "title": string,
> >  "author": string,
> >  "price": float
> > }
> > ```
> > *JSON*
> >
> > **Error response:** *404 Book not found*


**DELETE `/book/:isbn`**

> **Name:** Delete book
>
> > **Result**: *200 Book deleted*


**PUT `/book/:isbn`**

> **Name:** Update book
> 
> **Parameters**:
> ```
> {
>   "isbn": string,
>   "title": string,
>   "author": string,
>   "price": float
> }
> ```
> > **Result**: *200 Book updated*
> > 
> > **Error response**: *404 book not found*
---