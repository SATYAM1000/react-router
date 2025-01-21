# React Router Documentation

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Core Concepts](#core-concepts)
- [Basic Routing](#basic-routing)
- [Advanced Features](#advanced-features)
- [Hooks](#hooks)
- [Navigation](#navigation)
- [Data Management](#data-management)
- [Security](#security)
- [Examples](#examples)

## Overview

React Router is a powerful client-side routing library for React applications that enables dynamic routing, navigation, and state management. It allows you to build single-page applications (SPAs) with multiple views while maintaining clean URLs and browser history.

### Multi-Page vs Single-Page Applications

**Multi-Page Applications (MPAs)**:

- Each page requires a new server request
- Full page reload on navigation
- Traditional website behavior

**Single-Page Applications (SPAs)**:

- Initial load fetches the application
- Subsequent navigation happens client-side
- Smoother user experience with no page reloads

## Installation

```bash
npm install react-router-dom
```

## Core Concepts

### Basic Router Setup

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Nested Routing

Layout components can be used to create nested routes with shared UI elements:

```jsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

### Lazy Loading with Suspense

```jsx
import { Suspense, lazy } from "react";

const ProductPage = lazy(() => import("./pages/ProductPage"));

function App() {
  return (
    <Routes>
      <Route
        path="/products"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductPage />
          </Suspense>
        }
      />
    </Routes>
  );
}
```

## Navigation

### Link Component

```jsx
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/products/123" state={{ from: "navigation" }}>
        Product 123
      </Link>
    </nav>
  );
}
```

### NavLink Component

NavLink provides active state styling:

```jsx
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
    </nav>
  );
}
```

## Hooks

### useParams

```jsx
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  return <div>Product ID: {id}</div>;
}
```

### useSearchParams

```jsx
import { useSearchParams } from "react-router-dom";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div>
      <button onClick={() => setSearchParams({ category: "electronics" })}>
        Filter Electronics
      </button>
      {/* Display filtered products */}
    </div>
  );
}
```

### useLocation

```jsx
import { useLocation } from "react-router-dom";

function ProductPage() {
  const location = useLocation();
  const { from } = location.state || {};

  return <div>Navigated from: {from}</div>;
}
```

### useOutletContext

```jsx
import { Outlet, useOutletContext } from "react-router-dom";

function Layout() {
  const [user, setUser] = useState(null);
  return <Outlet context={[user, setUser]} />;
}

function ChildComponent() {
  const [user, setUser] = useOutletContext();
  return <div>Welcome, {user.name}</div>;
}
```

## Data Management

### Loader Functions

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/products/:id",
    element: <ProductDetail />,
    loader: async ({ params }) => {
      const response = await fetch(`/api/products/${params.id}`);
      return response.json();
    },
    errorElement: <ErrorBoundary />,
  },
]);

function ProductDetail() {
  const product = useLoaderData();
  return <div>{product.name}</div>;
}
```

### Form Handling

```jsx
import { Form, useActionData } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/products/new",
    element: <ProductForm />,
    action: async ({ request }) => {
      const formData = await request.formData();
      // Process form data
      return { success: true };
    },
  },
]);

function ProductForm() {
  const actionData = useActionData();

  return (
    <Form method="post">
      <input name="name" type="text" />
      <button type="submit">Create Product</button>
      {actionData?.success && <p>Product created!</p>}
    </Form>
  );
}
```

## Security

### Protected Routes

```jsx
function ProtectedRoute({ children }) {
  const auth = useAuth(); // Your auth context

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

// Usage in router
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
  loader={async () => {
    if (!auth.user) {
      throw redirect("/login");
    }
    return loadDashboardData();
  }}
/>;
```

## Examples

### 404 Page

```jsx
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Other routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}
```

### Navigation Programmatically

```jsx
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
    navigate("/dashboard", { replace: true });
  };

  return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
}
```

### Navigation State

```jsx
function useNavigation() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }

  return <div>Content</div>;
}
```

### URL Utilities

```jsx
// Create URL object
const url = new URL(window.location.href);
const searchParams = new URLSearchParams(url.search);

// Add/modify parameters
searchParams.set("category", "electronics");
searchParams.append("filter", "inStock");

// Convert back to string
const queryString = searchParams.toString();
```

This documentation covers the core features and advanced usage of React Router. For more detailed information and updates, refer to the official React Router documentation.


### useNavigation hook : 
### defer: returns a promise in object form : defer takes an object representing any data that you want to have access in the component. the value of the object keys should be a promise


### Await

### Suspense
 
 