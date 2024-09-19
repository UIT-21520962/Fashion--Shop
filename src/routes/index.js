import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import RegisterPage from './../pages/RegisterPage/RegisterPage';
import ProductCategory from './../pages/ProductsCategory/ProductsCategory';
import AccountInfo from './../pages/Profile/AccountInfo';
import AccountEdit from './../pages/Profile/AccountEdit';
import AccountAddress from '../pages/Profile/AccountAddress';
import Order from '../pages/Profile/Order';
import LikeProduct from '../pages/Profile/LikeProduct';
import refund from '../pages/Profile/refund';
import AdminDasboard from './../pages/AdminPage/AdminDasboard';
import AdminProduct from '../pages/AdminPage/AdminProduct';
import AdminOrder from './../pages/AdminPage/AdminOrder';
import AdminCustomer from './../pages/AdminPage/AdminCustomer';
import AdminStatistic from './../pages/AdminPage/AdminStatistic';
import AdminSale from './../pages/AdminPage/AdminSale';
import AdminReview from './../pages/Profile/AdminReview';

export const routes=[
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader: true
    },
    {
        path:'/product-category',
        page: ProductCategory,
        isShowHeader: true
    },
    {
        path:'/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    },
    {
        path:'/login',
        page: LoginPage,
        isShowHeader: true
    },
    {
        path:'/register',
        page: RegisterPage,
        isShowHeader: true
    },

    {
        path:'/profile/account',
        page: AccountInfo,
        isShowHeader: true
    },
    {
        path:'/profile/account/edit',
        page: AccountEdit,
        isShowHeader: true
    },
    {
        path:'/profile/account/address',
        page: AccountAddress,
        isShowHeader: true
    },
    {
        path:'/profile/account/order',
        page: Order,
        isShowHeader: true
    },
    {
        path:'/profile/account/like-product',
        page: LikeProduct,
        isShowHeader: true
    },
    {
        path:'/profile/account/refund',
        page: refund,
        isShowHeader: true
    },
    {
        path:'/admin/dashboard',
        page: AdminDasboard,
        isShowHeader: false
    },
    {
        path:'/admin/product',
        page: AdminProduct,
        isShowHeader: false
    },
    {
        path:'/admin/order',
        page: AdminOrder,
        isShowHeader: false
    },
    {
        path:'/admin/customer',
        page: AdminCustomer,
        isShowHeader: false
    },
    {
        path:'/admin/statistic',
        page: AdminStatistic,
        isShowHeader: false
    },
    {
        path:'/admin/sale',
        page: AdminSale,
        isShowHeader: false
    },
    {
        path:'/admin/review',
        page: AdminReview,
        isShowHeader: false
    },
    {
        path: "*",
        page: NotFoundPage
    }
]