import express from 'express';
import userCtrl from './controllers/Users.controller.js';
import adminUserCtrl from './controllers/AdminUsers.controller.js';
import recordCtrl from './controllers/Records.controller.js';
import membershipCtrl from './controllers/Memberships.controller.js';
import claimCtrol from './controllers/Claims.controller.js'
import auth from "./auth/middleware";

/*
	File cointaining all routes to the controllers of the platform
*/

var router = express.Router();

router.get('/test', (req, res) => {
	res.status(200).json({ status: true });
});

router.post('/add_claim', claimCtrol.add_claim)
router.get('/check_claim', claimCtrol.check_claim)

//AdminUser
router.post('/signin', adminUserCtrl.signin);
router.get('/verify_token', auth.authorization, adminUserCtrl.verify_token)

//User
router.get('/users', auth.authorization, userCtrl.list);

//Record
router.post('/add_records', auth.authorization, recordCtrl.add_records);
router.post('/delete_records', auth.authorization, recordCtrl.delete_records);
router.get('/records', auth.authorization, recordCtrl.list);
router.post('/send_confirmation_email', auth.authorization, recordCtrl.sendConfirmationEmail);

//Membership
router.get('/memberships', auth.authorization, membershipCtrl.list);

module.exports = router;
