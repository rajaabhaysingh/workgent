import Home from "../components/home/Home";
import Signup from "../components/auth/signup/Signup";
import Login from "../components/auth/login/Login";
import ResetPassword from "../components/auth/resetPassword/ResetPassword";
import Categories from "../components/categories/Categories";
import Account from "../components/account/Account";
import Search from "../components/search/Search";
import Trending from "../components/trending/Trending";
import Jobs from "../components/jobs/Jobs";
import Events from "../components/events/Events";
import Help from "../components/help/Help";
import Error404 from "../components/layouts/errors/Error404";
import Premium from "../components/premium/Premium";

const routes = [
  // Home
  {
    path: "/",
    component: Home,
    title: "Workgent - Home",
    exact: true,
  },
  // Register or Signup
  {
    path: "/register",
    component: Signup,
    title: "Workgent - Register",
    exact: true,
    needsAuth: false,
  },
  // Login
  {
    path: "/login",
    component: Login,
    title: "Workgent - Login",
    exact: false,
    needsAuth: false,
  },
  // Reset password
  {
    path: "/auth/reset-password",
    component: ResetPassword,
    title: "Workgent - Reset password",
    needsAuth: false,
  },
  // Categories
  {
    path: "/categories",
    component: Categories,
    title: "Workgent - Categories",
    needsAuth: false,
  },
  // Account
  {
    path: "/account",
    component: Account,
    title: "Workgent - Account",
    needsAuth: false,
  },
  // Search
  {
    path: "/search",
    component: Search,
    title: `Workgent - ${"Search name"}`,
    needsAuth: false,
  },
  // Trending
  {
    path: "/trending",
    component: Trending,
    title: "Workgent - Trending",
    needsAuth: false,
  },
  // Jobs
  {
    path: "/jobs",
    component: Jobs,
    title: "Workgent - Jobs",
    needsAuth: false,
  },
  // Events
  {
    path: "/events",
    component: Events,
    title: "Workgent - Events",
    needsAuth: false,
  },
  // Help
  {
    path: "/help",
    component: Help,
    title: "Workgent - Help",
    needsAuth: false,
  },
  // Premium
  {
    path: "/premium",
    component: Premium,
    title: "Workgent - Premium",
    needsAuth: false,
  },
  // Error404
  {
    path: "/error_404",
    component: Error404,
    title: "Error 404",
    exact: true,
    needsAuth: false,
  },
];

export default routes;
