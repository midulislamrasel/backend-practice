import express from "express";
import UserRoutes from "./UserRoutes";
import SubscriptionRouts from "./SubscriptionRouts";
import PlanRoutes from "./PlanRoutes";
import MealRoutes from "./MealRoutes";
import DeliveryRoutes from "./DeliveryRoutes";
import DeliveryPartnerRoutes from "./DeliveryPartnerRoutes";


const router = express.Router();

const moduleRoutes = [
    {
      path: "/users",
      route: UserRoutes,
    }, 
    {
      path: "/subscriptions", 
      route: SubscriptionRouts 
    },
    { 
      path: "/plans",
      route: PlanRoutes
    },
    { 
      path: "/meals",
      route: MealRoutes
    },
    {
      path: "/deliveries",
      route: DeliveryRoutes
    },
    {
      path: "/delivery-partners",
      route: DeliveryPartnerRoutes
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;
