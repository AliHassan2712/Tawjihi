const express = require('express');
const {
    protect,
    allowedTo
} = require('../middlewares/authMiddleware');

const {
    addUserIdToReqParams,
    updateMeMiddleware,
    activationMiddleware
} = require("../middlewares/userMiddleware");

const {
    getUserValidator,
    createUserValidator,
    updateUserValidator,
    deleteUserValidator,
    changePasswordValidator,
    activateUserValidator,
    deactivateUserValidator,
    acceptTeacherValidator,
    refuseTeacherValidator
} = require("../utils/validators/userValidator");

const {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser,
    uploadUserFiles,
    handleUserFiles,
    deleteMe,
    getMe,
    changePassword,
    acceptTeacher,
    refuseTeacher
} = require("../controllers/UserController");

const teacherReviewRoutes = require("./TeacherReviewRoutes");

const router = express.Router();

router.use("/:teacherId/teacherReviews", teacherReviewRoutes);

router.route("/deleteMe")
    .delete(
        protect,
        allowedTo("user", "teacher"),
        addUserIdToReqParams,
        deleteMe
    );

router.route("/updateMe")
    .patch(
        protect,
        allowedTo("admin", "user", "teacher"),
        addUserIdToReqParams,
        updateMeMiddleware,
        uploadUserFiles,
        handleUserFiles,
        updateUserValidator,
        updateUser
    );

router.route("/changePassword")
    .patch(
        protect,
        allowedTo("admin", "user", "teacher"),
        addUserIdToReqParams,
        changePasswordValidator,
        changePassword
    );

router.route("/me")
    .get(
        protect,
        allowedTo("admin", "user", "teacher"),
        addUserIdToReqParams,
        getUserValidator,
        getMe
    );

router.route("/")
    .get(getAllUsers)
    .post(
        protect,
        allowedTo("admin"),
        uploadUserFiles,
        handleUserFiles,
        createUserValidator,
        createUser
    );

router.route("/:id/activate")
    .patch(
        protect,
        allowedTo("admin"),
        activateUserValidator,
        activationMiddleware(true),
        updateUser
    );

router.route("/:id/deactivate")
    .patch(
        protect,
        allowedTo("admin"),
        deactivateUserValidator,
        activationMiddleware(false),
        updateUser
    );

router.route("/:id/acceptTeacher")
    .patch(
        protect,
        allowedTo("admin"),
        acceptTeacherValidator,
        activationMiddleware(true),
        acceptTeacher
    );

router.route("/:id/refuseTeacher")
    .delete(
        protect,
        allowedTo("admin"),
        refuseTeacherValidator,
        refuseTeacher
    );

router.route("/:id")
    .get(
        getUserValidator,
        getUser
    )
    .patch(
        protect,
        allowedTo("admin"),
        uploadUserFiles,
        handleUserFiles,
        updateUserValidator,
        updateUser
    )
    .delete(
        protect,
        allowedTo("admin"),
        deleteUserValidator,
        deleteUser
    );

module.exports = router;
