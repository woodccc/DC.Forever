const router = require('koa-router')()

const rubikCube = require("../models/rubikCube");

router.prefix('/rubik-cube')

router.post("/speed-3/record", async(ctx) => {
	const { time } = ctx.request.body
	
	ctx.body = await rubikCube.create({ time, dateTime: new Date() })
});

module.exports = router;