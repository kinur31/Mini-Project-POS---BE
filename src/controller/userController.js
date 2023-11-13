const { uploadAvatarService } = require("../services/userController");

const uploadAvatarController = async(req, res) => {
    try {
        const { id } = req.params;
        await uploadAvatarService(id, req.file?.filename);

        return res.status(200).json({
            message: "Upload Avatar Successfully"
        })
    } catch (err) {
        return res.status(500).send(err?.message);
    }
}

module.exports = {
    uploadAvatarController
}