const router = require('koa-router')()

const rubikCube = require("../models/rubikCube");

router.get("/rubik-cube/speed-3/records", async(ctx) => {
	ctx.body = await rubikCube.find({})
})

router.post("/rubik-cube/speed-3/record", async(ctx) => {
	const { time } = ctx.request.body
	
	ctx.body = await rubikCube.create({ time, dateTime: new Date() })
})

module.exports = router;