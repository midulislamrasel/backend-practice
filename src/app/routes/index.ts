import express from "express";
import UserRoutes from "./user.route";
import SubscriptionRouts from "./subscription.route";
import PlanRoutes from "./plan.routes";
import MealRoutes from "./meal.routes";
import DeliveryRoutes from "./delivery.route";
import deliveryPartnerRoutes from "./deliveryPartner.route";


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
      route: deliveryPartnerRoutes
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;
