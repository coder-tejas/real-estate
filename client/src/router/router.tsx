import {
    Router,
    Route,
    RootRoute,
    redirect,
    createRoute,
    createRootRoute,
    Outlet,
  } from '@tanstack/react-router'
  import Home from "../pages/Home/Page"
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
  // Root layout
  const rootRoute = createRootRoute({
    component: () => <div><Outlet /></div>
  })
  
  // Home route
  const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
  })

  const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/auth/login',
    component: Login,
  })
  const SignUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/auth/Signup',
    component: Signup,
  })
  
  // About route
  // const aboutRoute = createRoute({
  //   getParentRoute: () => rootRoute,
  //   path: '/about',
  //   component: About,
  // })
  
  // Admin route with role guard
  // const adminRoute = createRoute({
  //   getParentRoute: () => rootRoute,
  //   path: '/admin',
  //   component: Admin,
  //   beforeLoad: ({ context }) => {
  //     if (context.user?.role !== 'admin') {
  //       throw redirect({ to: '/' })
  //     }
  //   },
  // })
  
  // Route tree
  const routeTree = rootRoute.addChildren([
    homeRoute,
    loginRoute,
    SignUpRoute
    // authRoute,
    // adminRoute,
  ])
  
  // Create router
  export const router = new Router({
    routeTree,
    context: {
      user: useUser(),
    },
  })
  
  // Type hinting
  declare module '@tanstack/react-router' {
    interface Register {
      router: typeof router
    }
  }
  function useUser() {
    // Mock implementation of user context
    return {
      id: '123',
      name: 'John Doe',
      role: 'admin', // Change to 'user' or other roles as needed
    };
  }
  