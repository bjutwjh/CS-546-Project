const { defaultErrorHandling } = require("../middleware");
const landingPageRouter = require("./landing");
const expensesRouter = require("./expenses");
const expensePaymentRouter = require("./expensePayments");
const usersRouter = require("./users");
const rankRouter = require("./ranks");
const corporateRouter = require("./corporate");

const configRoutes = (app) =>
  app
    .use("/", landingPageRouter)
    .use("/expense", expensesRouter)
    .use("/payment", expensePaymentRouter)
    .use("/user", usersRouter)
    .use("/rank", rankRouter)
    .use("/corporate", corporateRouter)
    .use(defaultErrorHandling);

module.exports = {
  configRoutes,
};
