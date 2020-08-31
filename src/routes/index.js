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
import Contact from "../components/contact/Contact";
import Help from "../components/help/Help";

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
    path: "/auth/register",
    component: Signup,
    title: "Workgent - Register",
    exact: true,
  },
  // Login
  {
    path: "/auth/login",
    component: Login,
    title: "Workgent - Login",
    exact: true,
  },
  // Reset password
  {
    path: "/auth/reset-password",
    component: ResetPassword,
    title: "Workgent - Reset password",
  },
  // Categories
  {
    path: "/categories",
    component: Categories,
    title: "Workgent - Categories",
  },
  // Account
  {
    path: "/account",
    component: Account,
    title: "Workgent - Account",
  },
  // Search
  {
    path: "/search",
    component: Search,
    title: `Workgent - ${"Search name"}`,
  },
  // Trending
  {
    path: "/trending",
    component: Trending,
    title: "Workgent - Trending",
  },
  // Jobs
  {
    path: "/jobs",
    component: Jobs,
    title: "Workgent - Jobs",
  },
  // Events
  {
    path: "/events",
    component: Events,
    title: "Workgent - Events",
  },
  // Contact
  {
    path: "/contact",
    component: Contact,
    title: "Workgent - Contact",
  },
  // Help
  {
    path: "/help",
    component: Help,
    title: "Workgent - Help",
  },
];

export default routes;
