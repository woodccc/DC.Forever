const express = require('express');
const router = express.Router();

const Weight = require("../models/weight");

router.get("/", (req, res) => {
    Weight.find({})
        .then(weight => {
            res.json(weight);
        })
        .catch(err => {
            console.log(2);
            res.json(err);
        });
});
//
// // 通过ObjectId查询单个英雄信息路由
// router.get("/hero/:id", (req, res) => {
//     Hero.findById(req.params.id)
//         .then(hero => {
//             res.json(hero);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });
//
router.post("/", (req, res) => {
    Weight.create(req.body, (err, weight) => {
        if (err) {
            res.json(err);
        } else {
            res.json(weight);
        }
    });
});

router.put("/:id", (req, res) => {
    Weight.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: {
                date: req.body.date,
                tag: req.body.tag,
                weight: req.body.weight
            }
        },
        {
            new: true
        }
    )
        .then(weight => res.json(weight))
        .catch(err => res.json(err));
});

router.delete("/:id", (req, res) => {
    Weight.findOneAndRemove({
        _id: req.params.id
    })
        .then(weight => res.send('删除成功'))
        .catch(err => res.json(err));
});

module.exports = router;