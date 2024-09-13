import { RouteProps } from "react-router-dom"
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage"
// import { AboutPageAsync } from "../../pages/AboutPage/AboutPage.async"
import { HomePageAsync } from "../../pages/HomePage/HomePage.async"
import { GamePageAsync } from "../../pages/GamePage/GamePage.async"
import { StartPageAsync } from "../../pages/StartPage/StartPage.async"
import { ShopPageAsync } from "../../pages/ShopPage/ShopPage.async"

export enum AppRoutes {
    HOME = 'home',
    GAME = 'game',
    START = 'start',
    SHOP = 'shop',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.HOME]: '/',
    [AppRoutes.GAME]: '/game',
    [AppRoutes.START]: '/start',
    [AppRoutes.SHOP]: '/shop',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.HOME]: {
        path: RoutePath.home,
        element: <HomePageAsync />
    },
    [AppRoutes.GAME]: {
        path: RoutePath.game,
        element: <GamePageAsync />
    },
    [AppRoutes.START]: {
        path: RoutePath.start,
        element: <StartPageAsync />
    },
    [AppRoutes.SHOP]: {
        path: RoutePath.shop,
        element: <ShopPageAsync />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
}