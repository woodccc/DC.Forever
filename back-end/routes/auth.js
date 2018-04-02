const router = require('koa-router')()

// const Weight = require("../models/weight");

router.post("/login", async(ctx, next) => {
	console.log('ctx.request.body', ctx.request.body)
	// ctx.body = await Weight.create(ctx.request.body);
	ctx.body = 'ok'
});

module.exports = router;