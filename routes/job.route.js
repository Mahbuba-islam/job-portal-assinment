const express = require('express')
const router = express.Router()
const jobControler = require('../Controlers/job.controler')
// const uploader = require("../middleware/uploader")


// router.route("/file-upload")
// .post(uploader.array("image"),jobControler.fileUpload)

// router.route("/bulk-update")
// .patch(productControler.bulkUpdateProducts)

// router.route("/bulk-delete")
// .delete(productControler.bulkDeleteProducts)


router
.route('/')
 .get(jobControler.getJob)
.post(jobControler.createJob)

router
.route('/:id/apply')
.post(jobControler.applyJobById)


router
.route('/:id')
.patch(jobControler.updateJobById)



module.exports = router;