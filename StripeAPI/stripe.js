require("dotenv").config();
const stripeAPI = require("stripe")(
	"sk_test_51LAYVvGbLCDl0eiJCUUeUedrG6c08fCAYq3MeGULJMpEwvJ2kqMKfiF7pataktaaPUjo06zPUJpUAf8gu9SSMd5l00p8xGzlsk"
);

module.exports = stripeAPI;
