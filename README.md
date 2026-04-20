# Webshop Project

## Leírás

Ez a projekt egy egyszerű webshop alapú alkalmazás, amely:

* Angular frontendből
* .NET backendből
* Docker konténerekből áll

A frontend HTTP kérésekkel kommunikál a backend API-val, amely adatokat szolgáltat.

---

## Használt technológiák

### Frontend

* Angular
* TypeScript
* HTML / CSS
* Nginx (Dockerben)

### Backend

* .NET (ASP.NET Core Web API)
* C#

### Egyéb

* Docker
* Docker Compose
* Git / GitHub

---

## Projekt struktúra

```
webshop-project/
│
├── backend/        # .NET API
├── frontend/       # Angular alkalmazás
├── docker-compose.yml
└── README.md
```

---

## Futtatás (Dockerrel)

### 1. Követelmények

* Docker Desktop telepítve

---

### 2. Indítás

A projekt gyökér mappájában:

```
docker-compose up -d
```

---

### 3. Elérés

* Frontend:
  http://localhost:4200

* Backend API:
  http://localhost:18080/weatherforecast

---

### 4. Leállítás

```
docker-compose down
```

---

## Backend - Frontend kommunikáció

A frontend HTTP kéréssel hívja meg a backend API-t:

```
GET /weatherforecast
```

A válasz JSON formátumban érkezik, amelyet a frontend megjelenít.

---

## Docker felépítés

### Backend

* ASP.NET alkalmazás
* Port: 8080 (konténeren belül)

### Frontend

* Angular build
* Nginx szolgálja ki
* Port: 80 (konténeren belül)

---

## Megjegyzések

* A backend és frontend külön konténerben fut
* A kommunikáció HTTP-n keresztül történik
* A projekt fejlesztési célokat szolgál

---

## Készítette

Sárvári Zsolt
