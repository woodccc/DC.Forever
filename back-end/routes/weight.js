const router = require('koa-router')()

const Weight = require("../models/weight");

router.prefix('/weight')

router.get('/', async (ctx, next) => {
	ctx.body = await Weight.find({})
})

router.post("/", async(ctx, next) => {
	ctx.body = await Weight.create(ctx.request.body);
});

router.put("/:id", async(ctx, next) => {
		ctx.body = await Weight.findOneAndUpdate(
        { _id: ctx.params.id },
        {
            $set: {
                date: ctx.request.body.date,
                tag: ctx.request.body.tag,
                weight: ctx.request.body.weight
            }
        },
        {
            new: true
        }
    )
});

router.delete("/:id", async(ctx, next) => {
			ctx.body = await Weight.findOneAndRemove({_id: ctx.params.id})
});

module.exports = router;